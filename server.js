import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

// ---------------------------------------------------

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const mongoDB = `mongodb+srv://${username}:${password}@sandbox.apxur.mongodb.net/`;

mongoose.connect(mongoDB);

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ---------------------------------------------------

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`http://localhost:${port}/`)
);