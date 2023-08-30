// GET /getAllPosts
import Shows from '../schemas/chrisSchema.js'

export const getAllPosts = (req, res) => {
  Shows.find({})
    .then(results => {
      res.startus(200).send(resulsts);
    })
    .catch(err => {
      res.status(400).send(err);
    })
};

// GET /getSinglePost/:id
export const getSinglePost = (req, res) => {
  const { id } = req.params;

  Shows.findOne({ _id: id })
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(400).send(err);
    })
};

// POST /createPost
export const createPost = (req, res) => {
  const { title, director, producer, year, description } = req.body;

  Shows.create({ title, director, producer, year, description })
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(400).send(err);
    })
};

// PUT /editSinglePost
export const editSinglePost = (req, res) => {
  const { body, params: { id } } = req;

  // it seems like body will only contain the fields send,
  // so we might be able to send it directly to MangoDB...
  // Who needs validation of input, right? :P
  Shows.findOneAndUpdate({ _id: id }, { ...body }, { new: true })
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(400).send(err);
    })
};

// DELETE /deleteSinglePost
export const deleteSinglePost = (req, res) => {
  const { id } = req.params;
  res.send('Chris delete ' + id);
};
