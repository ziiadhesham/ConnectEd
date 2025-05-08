const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');
const authMiddleware = require('../Middleware/authenticate');


router.get('/',authMiddleware, bookmarkController.getAllBookmarks);
router.post('/',authMiddleware, bookmarkController.createBookmark);
router.get('/user/:userId/folder/:folderId',authMiddleware, bookmarkController.getBookmarksByUserAndFolder);
router.get('/folder/:folderId',authMiddleware, bookmarkController.getBookmarksByFolder);
router.get('/user/:userId',authMiddleware, bookmarkController.getBookmarksByUser);
router.delete('/:id',authMiddleware, bookmarkController.deleteBookmark);


module.exports = router;
