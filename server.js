import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Posts from "./schemas/postSchema.js";
import db from "./db/mongodb.js";
import postsRouter from "./routes/postsRouter.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/posts", postsRouter)


app.listen(port, () =>
  console.log(`http://localhost:${port}/`)
);