const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');


router.get('/', bookmarkController.getAllBookmarks);
router.post('/', bookmarkController.createBookmark);
router.get('/user/:userId/folder/:folderId', bookmarkController.getBookmarksByUserAndFolder);
router.get('/folder/:folderId', bookmarkController.getBookmarksByFolder);
router.get('/user/:userId', bookmarkController.getBookmarksByUser);
router.delete('/:id', bookmarkController.deleteBookmark);


module.exports = router;
