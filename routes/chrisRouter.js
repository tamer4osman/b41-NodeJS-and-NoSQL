import { Router } from 'express'
import { getAllPosts, getSinglePost, createPost, editSinglePost, deleteSinglePost } from '../controllers/chrisController.js'
const chrisRouter = Router();

// GET /getAllPosts
chrisRouter.get('/getAllPosts', getAllPosts);

// GET /getSinglePost/:id
chrisRouter.get('/getSinglePost/:id', getSinglePost);

// POST /createPost
chrisRouter.post('/createPost', createPost);

// PUT /editSinglePost/:id
chrisRouter.put('/editSinglePost/:id', editSinglePost);

// DELETE /deleteSinglePost/:id
chrisRouter.delete('/deleteSinglePost/:id', deleteSinglePost);

export default chrisRouter;