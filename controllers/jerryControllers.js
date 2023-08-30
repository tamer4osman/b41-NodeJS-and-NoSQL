// GET /getAllPosts
// Fetch all the posts in one go!
export const getAllPosts = (req, res) => {
    res.send("Golden retrieve all posts");
};

// GET /getSinglePost/:id
// Fetch a single post by its unique identifier
export const getSinglePost = (req, res) => {
    const id = req.params.id;
    // Using template literals to format the string.
    res.send(`Golden retrieve single post with ID: ${id}`);
};

// POST /createPost
// Create a brand new post with the content from the client
export const createPost = (req, res) => {
    const body = req.body;
    console.log(body);
    res.send("Creating a new post");
};

// PUT /editSinglePost/:id
// Update an existing post by its unique identifier
export const editSinglePost = (req, res) => {
    const id = req.params.id;
    // Using template literals again for cleaner code.
    res.send(`Updating post with ID: ${id}`);
};

// DELETE /deleteSinglePost/:id
// Remove an existing post by its unique identifier
export const deleteSinglePost = (req, res) => {
    const id = req.params.id;
    res.send(`Deleting post with ID: ${id}`);
};
