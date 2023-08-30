import {Router} from "express";
const app = Router();

app.get("/getAllPosts", (req, res) => {
    res.send("vijaya is recieving something from api");
});

// GET single post
app.get("/getSinglePost/:id", (req, res) => {
    const id  = req.params.id
    res.send("vijaya is recieving singlepost with id from api" + id);
});

// POST /createPost
app.post("/createPost", (req, res) => {
    const body = req.params.body;
    console.log(body)
    res.send("Vijaya create new post" +id);
});

// PUT /editPost
app.put("//editSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("Vijaya edit the Post"+id)
})

// DELETE /editPost
app.delete("/editPost/:id/:name", (req, res) => {
    const { id } = req.params;
    res.send("Vijaya delete the Post"+id)
})


export default app;