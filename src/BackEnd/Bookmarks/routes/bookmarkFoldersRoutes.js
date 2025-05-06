const express = require('express');
const router = express.Router();
const folderController = require('../controllers/bookmarkFolderController');

router.post('/', folderController.createFolder);
router.get('/user/:userId', folderController.getFoldersByUser);
router.put('/:id', folderController.updateFolder);
router.delete('/:id', folderController.deleteFolder);
router.get('/', folderController.getAllFolders);

module.exports = router;
