import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

mongoose
  .connect(process.env.MONGOOURI)
  .then(() => {
    return console.log("Databse Connected");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
