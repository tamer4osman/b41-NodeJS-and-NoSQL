import {Router} from "express";
const app = Router();

// GET /getAllPosts
app.get("/getAllPosts", (req, res) => {
    res.send("eca get all posts");
});

// GET /getSinglePost/:id
app.get("/getSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("ECA GET SINGLE post WITH ID OF " + id);
});

// POST /createPost
app.post("/createPost", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("ECA POST CREATE NEW POST");
});

// PUT /editSinglePost/:id
app.put("/editSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("ECA PUT SINGLE post WITH ID OF " + id);
});

// DELETE /deleteSinglePost/:id
app.delete("/deleteSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("ECA DELETE SINGLE post WITH ID OF " + id);
});

export default app;