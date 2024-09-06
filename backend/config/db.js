import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectToDb = async () => {
  await mongoose
    .connect(
      process.env.MONGODB_URL
    )
    .then((res) => {
      console.log("DB CONNECTED");
    })
    .catch((err) => {
      console.log("DB CONNECTION ERROR");
    });
};

export default connectToDb;
