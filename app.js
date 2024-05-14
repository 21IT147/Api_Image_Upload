import express from "express";
import connectDB from "./utils/db.js";
import cors from "cors";
import EventEmitter from 'events';
const app = express();
EventEmitter.defaultMaxListeners = 100; 
app.use(cors());
app.use(express.json());

const PORT = 5000;
const DB = "mongodb+srv://21it147:0000@cluster0.9jm2xzm.mongodb.net/";
connectDB(DB);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


import userRoute from "./routes/userauth.route.js";
app.use("/user",userRoute);

import imageRoute from "./routes/image.route.js";
app.use("/image",imageRoute);

app.use('/',(req,res)=>{res.status(200).send("This is Backend")})
