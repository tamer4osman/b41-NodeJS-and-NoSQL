import dotenv from "dotenv";
import express from "express";
import postsRouter from "./routes/postsRouter.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

// ROUTES
app.use("/posts", postsRouter)
// ECA ROUTES

// OLE ROUTES

// CHRIS ROUTES

// TAMER ROUTES

// JERRY ROUTES

// BEN ROUTES

// SUS ROUTES

// VIJ ROUTES

// ESTEBAN ROUTES




app.listen(port, () =>
  console.log(`http://localhost:${port}/`)
);