const Post = require("../models/PostModel");
const mongoose = require("mongoose");

const hadTitleAndDescription = (title, description) => {
  return title && description;
};
// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single post
const getSinglePost = async (req, res) => {
  const { id } = req.params;

  // Make sure id is a valid mongodb id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

// Post a new post
const createPost = async (req, res) => {
  const { title, description } = req.body;

  if (!hadTitleAndDescription(title, description)) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  try {
    const newPost = await Post.create({ title, description });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ error: "No such post" });
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  if (!hadTitleAndDescription(title, description)) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "No such post" });
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
};
