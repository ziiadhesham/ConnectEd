const express = require('express');
const router = express.Router();
const notificationController = require('./notificationController');

// Create notification
router.post('/', notificationController.createNotification);

// Get notifications by user ID
router.get('/user/:userId', notificationController.getNotificationsByUserId);

// Delete notification
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;