const Post = require("../models/Post")

const createNewPost = async (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        return res.status(400).json({ message: 'title and body are required' })
    }
    const post = await Post.create({ title, body })
    if (post) {
        const posts = await Post.find().lean()
        res.json(posts)
    }
    else {
        return res.status(400).json({ message: 'Invalid post' })
    }
}

const getAllPosts = async (req, res) => {
    const posts = await Post.find().lean()
    if (!posts?.length) {
        return res.status(400).json({ message: 'No posts found' })
    }
    res.json(posts)
}

const updatePost = async (req, res) =>{
    const { _id, title, body } = req.body
    if(!_id || !title || !body){
        return res.status(400).json({ messege: 'fields are required' })
    }
    const post = await Post.findById(_id).exec()
    if(!post){
        return res.status(400).json({ messege: 'post not found'})
    }
    post.title = title
    post.body = body
    await post.save()
    const posts = await Post.find().lean()
    res.json(posts)
}

const deletePost = async (req, res) => {
    const {_id} = req.params
    const post = await Post.findById(_id).exec()
    if (!post){
        return res.status(400).json({ messaga: 'post not found'})
    }
    await post.deleteOne()
    const posts = await Post.find().lean()
    if (!posts?.length) {
        return res.status(400).json({ message: 'No posts found' })
    }
    res.json(posts)
}


const postLike = async(req, res)=>{
    const {_id} = req.params
    const post = await Post.findById(_id).exec()
    post.like = !post.like
    await post.save()
    const posts = await Post.find().lean()
    res.json(posts)
    console.log("Update like post success!!!")
}

module.exports = {
    createNewPost,
    getAllPosts,
    updatePost,
    deletePost,
    postLike
}