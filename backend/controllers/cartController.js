import userModel from "../models/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    console.log(req.body.userId);
    let userData = await userModel.findById(req.body.userId);
    // console.log(userData)

    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({
      success: true,
      message: "Added to cart successfully",
    });
  } catch (error) {
    console.log("ADD TO CART ERROR");
    res.json({
      success: false,
      message: "ADD TO CART ERROR",
    });
  }
};

// remove items from user cart
const removeFromCart = async (req, res) => {

  console.log("remove from cart mein hu")

  try {
    let userData = await userModel.findById(req.body.userId);

    let cartData = await userData.cartData;

    console.log(`cartData = ${cartData}`)

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId]-=1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({
      success: true,
      message: "Removed from cart successfully",
    });
  } catch (error) {
    console.log("REMOVE FROM CART ERROR");

    res.json({
      success: false,
      message: "REMOVE FROM CART ERROR",
    });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    res.json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.log("Get FROM CART ERROR");

    res.json({
      success: false,
      message: "GET FROM CART ERROR",
    });
  }
};

export { addToCart, removeFromCart, getCart };
