const express = require('express');
const router = express.Router();
const folderController = require('../controllers/bookmarkFolderController');
const authMiddleware = require('../../Middleware/authenticate');

router.post('/',authMiddleware, folderController.createFolder);
router.get('/user/:userId',authMiddleware, folderController.getFoldersByUser);
router.put('/:id',authMiddleware, folderController.updateFolder);
router.delete('/:id',authMiddleware, folderController.deleteFolder);
router.get('/',authMiddleware, folderController.getAllFolders);

module.exports = router;
