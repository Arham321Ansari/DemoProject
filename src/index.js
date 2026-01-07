import express from "express";
import mongoose from "mongoose";

const app = express();

(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);
    app.on("error",()=>{
        console.log("err", error);
        }
    )
    app.listen(process.env.PORT, ()=>{
        console.log(`app is running on PORT: ${process.env.PORT}`);
    })
})()