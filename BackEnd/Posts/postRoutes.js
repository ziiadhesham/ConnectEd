const express = require('express');
const router = express.Router();
const postController = require('./postController');
const authMiddleware = require('../Middleware/authenticate');

// ✅ FIRST — Get logged-in user's posts
router.get('/my-posts', authMiddleware, postController.getMyPosts); // must come before /:id


// ✅ Create a new post (protected)
router.post('/', authMiddleware, postController.createPost);

// ✅ Get all posts (public)
router.get('/', postController.getAllPosts);

// ✅ Get single post by ID (must be after fixed routes)
router.get('/:id', postController.getPostById);

// ✅ Update / Delete posts (protected)
router.put('/:id', authMiddleware, postController.updatePost);
router.delete('/:id', authMiddleware, postController.deletePost);

// ✅ Interactions (protected)
router.post('/:id/like/:userId', authMiddleware, postController.likePost);
router.post('/:id/repost/:userId', authMiddleware, postController.repostPost);
router.post('/:id/comment/:userId', authMiddleware, postController.commentOnPost);

module.exports = router;
