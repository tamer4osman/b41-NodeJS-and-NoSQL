import {Router} from "express";

const app = Router();

app.get("/getAllPosts", (req, res) => {
    res.send("susanna get");
});

// GET /getSinglePost/:id
app.get("/getSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("Susanna get single post " + id);
});

// POST /createPost
app.post("/createPost", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("Susanna create post");
});

// PUT /editSinglePost/:id
app.put("/editSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("Susanna get single post " + id);
});

// DELETE /deleteSinglePost/:id
app.delete("/deleteSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("HOW DARE YOU DELETE THIS " + id);
});


export default app;