import {Router} from "express";
const app = Router();

app.get("/getAllPosts", (req, res) => {
    res.send("esteban get all posts");
});

// GET /getSinglePost/:id
app.get("/getSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("ESTEBAN GET SINGLE post WITH ID OF " + id);
});

// POST /createPost
app.post("/createPost", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("ESTEBAN POST CREATE NEW POST");
});

// PUT /editSinglePost/:id
app.put("/editSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("ESTEBAN PUT SINGLE post WITH ID OF " + id);
});

// DELETE /deleteSinglePost/:id
app.delete("/deleteSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("ESTEBAN DELETE SINGLE post WITH ID OF " + id);
});

export default app;