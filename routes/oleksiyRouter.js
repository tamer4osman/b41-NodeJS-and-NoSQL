import {Router} from "express";
import { getAllPosts, getSinglePost, createPost, editPost, deletePost } from "../controllers/oleksiyController.js";
const app = Router();

// GET /getAllPosts
app.get("/getAllPosts", getAllPosts);

// GET /getSinglePost/:id
app.get("/getSinglePost/:id", getSinglePost);

// POST /createPost
app.post("/createPost", createPost);

// PUT /editSinglePost/:id
app.put("/editSinglePost/:id", editPost);

// DELETE /deleteSinglePost/:id
app.delete("/deleteSinglePost/:id", deletePost);


export default app;