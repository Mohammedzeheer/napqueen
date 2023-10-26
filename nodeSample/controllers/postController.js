const postModel= require('../models/postModel')

const getblog= async(req, res) => {
    try {
      const posts = await postModel.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const getblogById =  async (req, res) => {
    try {
      const post = await postModel.findById(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}


const addBlog = async (req, res) => {
    const post = new postModel({
      title: req.body.title,
      content: req.body.content,
      category_id: req.body.category_id,
    });

 try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const editBlog = async (req, res) => {
    try {
      const post = await postModel.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title, content: req.body.content, updated_at: Date.now() },
        { new: true }
      );
      res.json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  const deleteBlog = async (req, res) => {
        try {
          await postModel.findByIdAndDelete(req.params.id);
          res.json({ message: 'Post deleted' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
   }


  module.exports={
    getblog,getblogById, addBlog , editBlog ,deleteBlog
  }