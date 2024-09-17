import orderModel from "../models/orderModel.js";
import userModel from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = "https://food-del-frontend-fgfb.onrender.com/";

  try {
    const { userId, items, amount, address } = req.body;

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    lineItems.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({
      success: true,
      session_url: session.url,
    });
  } catch (error) {
    console.log("PLACE ORDER ERROR");
    // console.log(error)
    res.json({
      success: false,
      message: error,
    });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({
        success: true,
        message: "Paid",
      });
    } else {
      console.log("nai mila");
      await orderModel.findByIdAndDelete(orderId);
      res.json({
        success: false,
        message: "Not paid",
      });
    }
  } catch (error) {
    console.log("VERIFY ORDER CATCH");
    res.json({
      success: false,
      message: "ERROR",
    });
  }
};

// user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });

    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log("USER ORDERS CATCH");
    res.json({
      success: false,
      message: "USER ORDERS CATCH",
    });
  }
};

//Listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});

    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log("LIST ORDERS ERROR");
    res.json({
      success: false,
      message: "ERROR",
    });
  }
};

// api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });

    res.json({
      success: true,
      message: "Status updated"
    })

  } catch (error) {
    console.log("UPDATE STATUS ERROR");
    res.json({
      success: false,
      message: "ERROR"
    })
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
