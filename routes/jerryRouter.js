import {Router} from "express";
const app = Router();

app.get("/getAllPosts", (req, res) => {
    res.send("this too shall pass LFG");
});

// GET /getSinglePost/:id
app.get("/getSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("All the single ladies (post) " + id);
});

// POST /createPost
app.post("/createPost", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("Create new post");
});

// PUT /editSinglePost/:id
app.put("/editSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("JERRY PUT SINGLE post WITH ID OF " + id);
});

// DELETE /deleteSinglePost/:id
app.delete("/deleteSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("JERRY DELETE SINGLE post WITH ID OF " + id);
});

export default app;