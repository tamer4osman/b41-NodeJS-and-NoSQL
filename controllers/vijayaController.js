// GET /getAllPosts
export const getAllPosts = (req, res) => {
    res.send("Vijaya get all posts");
};

// GET /getSinglePost/:id
export const getSinglePost = (req, res) => {
    const id = req.params.id;
    res.send("Vijaya GET SINGLE post WITH ID OF " + id);
};

// POST /createPost
export const createPost = (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("VIJAYA POST CREATE NEW POST");
};

// PUT /editSinglePost/:id
export const editSinglePost =  (req, res) => {
    const id = req.params.id;
    res.send("Vijaya edit the Post"+id)
}

// DELETE /deleteSinglePost/:id
export const deleteSinglePost = (req, res) => {
    const { id } = req.params;
    res.send("Vijaya delete the Post"+id)
}
