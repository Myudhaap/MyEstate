import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGOOURI)
  .then(() => {
    return console.log("Databse Connected");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
