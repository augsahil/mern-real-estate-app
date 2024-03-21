import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("catch error while connecting to db");
  });
const app = express();
app.listen(3000, () => {
  console.log("server is running");
});
