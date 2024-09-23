import express from "express";
import cors from "cors";
import connectToDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config'

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(cors())
app.use(express.json());

//db connection
connectToDb();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("hello world from backend");
});

app.listen(port, () => {
  console.log("SERVER RUNNING", port);
});
