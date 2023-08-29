import dotenv from "dotenv";
dotenv.config()
import mongoose from 'mongoose';

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const mongoDB = `mongodb+srv://${username}:${password}@sandbox.apxur.mongodb.net/`;

mongoose.connect(mongoDB);

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;