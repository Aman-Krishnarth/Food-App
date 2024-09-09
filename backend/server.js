import express from "express"
import cors from "cors"
import connectToDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



// app config
const app = express();
const port = 4000;


// middlewares
app.use(cors())
app.use(express.json())

//db connection
connectToDb()

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))


app.get("/",(req,res)=>{
    res.send("hello world from backend")
})


app.listen(port, ()=>{
    console.log("SERVER RUNNING", port)
})
