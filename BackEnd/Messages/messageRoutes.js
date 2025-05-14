const express = require('express');
const router = express.Router();
const messageController = require('./messageController');
const authMiddleware = require('../Middleware/authenticate');

// Create message
router.post('/',authMiddleware, messageController.createMessage);

// Get messages between two users
router.get('/between/:user1/:user2',authMiddleware, messageController.getMessagesBetweenUsers);

// Get single message by ID
router.get('/:id',authMiddleware, messageController.getMessageById);
//get all messages
router.get('/',authMiddleware, messageController.getAllMessages);

// Delete message
router.delete('/:id',authMiddleware, messageController.deleteMessage);
// Get all messages involving a user
router.get('/user/:userId', authMiddleware, messageController.getMessagesByUserId);


module.exports = router;
