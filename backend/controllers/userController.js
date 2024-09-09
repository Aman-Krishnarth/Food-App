import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config();

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = userModel.findOne({ email });

  if (!user) {
    return res.json({
      success: false,
      message: "User does not exist",
    });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = createToken(user._id);

      return res.json({
        success: true,
        message: "Successfully logged in",
        token,
      });
    } else {
      return res.json({
        success: false,
        message: "Email or Password is wrong",
      });
    }
  });
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//reigster user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    //checking if user already exists
    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    //vaidating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing password

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      const createdUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      const token = createToken(createdUser._id);

      res.json({
        sucess: true,
        token,
      });
    });
  } catch (error) {
    console.log("register user error");
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { registerUser, loginUser };
