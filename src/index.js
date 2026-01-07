import dotenv from 'dotenv';


import connectDB from './db/index.js';

dotenv.config({ path: './.env' });
connectDB();

//approach 1
// import express from "express";
// import mongoose from "mongoose";

// const app = express();

// (async ()=>{
//     await mongoose.connect(process.env.MONGODB_URI);
//     app.on("error",()=>{
//         console.log("err", error);
//         }
//     )
//     app.listen(process.env.PORT, ()=>{
//         console.log(`app is running on PORT: ${process.env.PORT}`);
//     })
// })()