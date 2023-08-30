// GET /getAllPosts
export const getAllPosts = (req, res) => {
    res.send("work");
};

// GET /getSinglePost/:id
export const getSinglePost = (req, res) => {
    const id = req.params.id
    res.send("Give me the ID, I will give you the information"+id);
};

// POST /createPost
export const createPost = (req, res) => {
    const body = req.body
    console.log(body)
    res.send("Look to my body hahaha");
};

// PUT /editSinglePost/:id
export const editSinglePost = (req, res) => {
    const id = req.params.id;
    res.send("Edit me " + id);
};

// DELETE /deleteSinglePost/:id
export const deleteSinglePost = (req, res) => {
    const id = req.params.id;
    res.send("Don't delete me please " + id);
};
