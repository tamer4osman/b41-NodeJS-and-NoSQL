// import Posts from "../schemas/oleksiySchema.js";

// export const createPost = (req, res) => {
//     try{
//       console.log(req.body);}
//       catch(err){
//         console.log(err);
//       }
//     Posts
//     .create({ title: "Terminator 2", author: "James Cameron", body: "Hasta la vista Baby" })
//     .then(newPost => {
//       res.status(200).send(newPost);
//     })
//     .catch(err => console.log(err))
// }

//GET all posts
export const getAllPosts = (req, res)=> {
    res.send('hi from Oleksiy')
};

//GET single post
export const getSinglePost = (req, res)=>{
    const id = req.params.id
    res.send('oleksiy get single post with id of' + id)
};

//POST create post
export const createPost = (req, res)=>{
    const body = req.body
    console.log(body);
    res.send(`Oleksiy POST CREATE NEW POST and here is what you have sent ${body.name}`)
};

//PUT edit post
export const editPost = (req, res)=>{
    const {id} = req.params
    res.send(`oleksiy PUT edit post and here is what you have sent ${id}`)
};

//DELETE delete singlepost
export const deletePost = (req, res)=>{
    const id = req.params.id
    res.send('oleksiy DELETE single post with id of' + id)
}
