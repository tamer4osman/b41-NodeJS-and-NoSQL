import {Router} from "express";
import { getAllPosts, getSinglePost, createPost, editSinglePost, deleteSinglePost } from "../controllers/vijayaController.js";
const app = Router();

app.get("/getAllPosts", getAllPosts);

// GET single post
app.get("/getSinglePost/:id", getSinglePost);

// POST /createPost
app.post("/createPost", createPost);

// PUT /editPost
app.put("/editSinglePost/:id", editSinglePost)

// DELETE /editPost
app.delete("/deleteSinglePost/:id", deleteSinglePost)


export default app;