// GET /getAllPosts
export const getAllPosts = (req, res) => {
  res.send('Chris get');
};

// GET /getSinglePost/:id
export const getSinglePost = (req, res) => {
  const { id } = req.params;
  res.send('Chris get single ' + id);
};

// POST /createPost
export const createPost = (req, res) => {
  const { body } = req;
  console.log(body);
  res.send('Chris post');
};

// PUT /editSinglePost
export const editSinglePost = (req, res) => {
  const { id } = req.params;
  res.send('Chris put ' + id);
};

// DELETE /deleteSinglePost
export const deleteSinglePost = (req, res) => {
  const { id } = req.params;
  res.send('Chris delete ' + id);
};