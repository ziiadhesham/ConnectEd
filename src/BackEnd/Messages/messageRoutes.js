const express = require('express');
const router = express.Router();
const messageController = require('./messageController');

// Create message
router.post('/', messageController.createMessage);

// Get messages between two users
router.get('/between/:user1/:user2', messageController.getMessagesBetweenUsers);

// Get single message by ID
router.get('/:id', messageController.getMessageById);
//get all messages
router.get('/', messageController.getAllMessages);

// Delete message
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
