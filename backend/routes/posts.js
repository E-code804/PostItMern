const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");

// Get all posts.
router.get("/", getAllPosts);

// Get a single post.
router.get("/:id", getSinglePost);

// Post a new post.
router.post("/", createPost);

// Delete a post.
router.delete("/:id", deletePost);

// Update a post.
router.put("/:id", updatePost);

module.exports = router;
