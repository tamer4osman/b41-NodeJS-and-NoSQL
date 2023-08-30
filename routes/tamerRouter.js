import {Router} from "express";
const app = Router();

app.get("/getAllPosts", (req, res) => {
    res.send("work");
});

app.get("/getSinglePost/:id", (req, res) => {
    const id = req.params.id
    res.send("Give me the ID, I will give you the information"+id);
});

app.post("/createPost/", (req, res) => {
    const body = req.body
    console.log(body)
    res.send("Look to my body hahaha");
});


app.put("/editSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("Edit me " + id);
});

app.delete("/deleteSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("Don't delete me please " + id);
});


export default app;