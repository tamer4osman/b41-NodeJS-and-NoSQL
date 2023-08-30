import { Router } from 'express'
const benRouter = Router()

benRouter.get('/getAllPosts', (req, res) => {
  res.send('Ben get')
})

// GET /getSinglePost/:id
benRouter.get("/getSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("BEN GET SINGLE post WITH ID OF " + id);
});

// POST /createPost
benRouter.post("/createPost", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("BEN POST CREATE NEW POST");
});

// PUT /editSinglePost/:id
benRouter.put("/editSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("BEN PUT SINGLE post WITH ID OF " + id);
});

// DELETE /deleteSinglePost/:id
benRouter.delete("/deleteSinglePost/:id", (req, res) => {
    const id = req.params.id;
    res.send("BEN DELETE SINGLE post WITH ID OF " + id);
});


export default benRouter;