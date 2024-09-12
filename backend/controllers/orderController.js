import orderModel from "../models/orderModel.js";
import userModel from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {

    const feUrl = 'http://localhost:5173'

  try {
    const { userId, items, amount, address } = req.body;

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, {cartData: {}})

    const lineItems = items.map((item)=>({
        priceData: {
            currency: "inr",
            productData: {
                name: item.name,
            },
            unitAmount: item.price*100
        },
        quantity: item.quantity
    }))

    lineItems.push({
        priceData:{
            currency: "inr",
            productData: {
                name: "Delivery Charges"
            },
            unitAmount: 2
        },
        quantity: 1
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${feUrl}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${feUrl}/verify?success=false&orderId=${newOrder._id}`,
        
    })

    res.json({
        success: true,
        session_url: session.url
    })

  } catch (error) {
    console.log("PLACE ORDER ERROR");
    res.json({
        success: false,
        message: "PLACE ORDER ERROR"
    })
  }
};

export { placeOrder };
