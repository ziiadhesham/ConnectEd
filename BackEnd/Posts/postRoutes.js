const express = require('express');
const router = express.Router();
const postController = require('./postController');
const authMiddleware = require('../Middleware/authenticate'); // Import your auth middleware

// Extra features (require user authentication)
router.post('/:id/like/:userId',authMiddleware, postController.likePost);
router.post('/:id/repost/:userId',authMiddleware,postController.repostPost); 
router.post('/:id/comment/:userId', authMiddleware,postController.commentOnPost);  
// Apply the authMiddleware on routes that need authentication
router.post('/', authMiddleware, postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', authMiddleware, postController.updatePost);  // Protect update post with authentication
router.delete('/:id', authMiddleware, postController.deletePost);  // Protect delete post with authentication



module.exports = router;
