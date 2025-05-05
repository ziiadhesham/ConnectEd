const express = require('express');
const router = express.Router();
const postController = require('./postController');
const authMiddleware = require('./authMiddleware'); // Import your auth middleware


// Apply the authMiddleware on routes that need authentication
router.post('/',  postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id',  postController.updatePost);  // Protect update post with authentication
router.delete('/:id',  postController.deletePost);  // Protect delete post with authentication

// Extra features (require user authentication)
router.post('/:id/like',  postController.likePost);
router.post('/:id/repost',postController.repostPost);
router.post('/:id/bookmark',  postController.bookmarkPost);
router.post('/:id/comment', postController.commentOnPost);

// // Apply the authMiddleware on routes that need authentication
// router.post('/', authMiddleware, postController.createPost);
// router.get('/', postController.getAllPosts);
// router.get('/:id', postController.getPostById);
// router.put('/:id', authMiddleware, postController.updatePost);  // Protect update post with authentication
// router.delete('/:id', authMiddleware, postController.deletePost);  // Protect delete post with authentication

// // Extra features (require user authentication)
// router.post('/:id/like', authMiddleware, postController.likePost);
// router.post('/:id/repost', authMiddleware, postController.repostPost);
// router.post('/:id/bookmark', authMiddleware, postController.bookmarkPost);
// router.post('/:id/comment', authMiddleware, postController.commentOnPost);

module.exports = router;
