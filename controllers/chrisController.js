// GET /getAllPosts
chrisRouter.get('/getAllPosts', (req, res) => {
  res.send('Chris get');
})

// GET /getSinglePost/:id
chrisRouter.get('/getSinglePost/:id', (req, res) => {
  const { id } = req.params;
  res.send('Chris get single ' + id);
})

// POST /createPost
chrisRouter.post('/createPost', (req, res) => {
  const { body } = req;
  console.log(body);
  res.send('Chris post');
})

// PUT /editSinglePost/:id
chrisRouter.put('/editSinglePost/:id', (req, res) => {
  const { id } = req.params;
  res.send('Chris put ' + id);
})

// DELETE /deleteSinglePost/:id
chrisRouter.delete('/deleteSinglePost/:id', (req, res) => {
  const { id } = req.params;
  res.send('Chris delete ' + id);
})
