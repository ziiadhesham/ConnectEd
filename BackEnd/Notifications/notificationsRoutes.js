const express = require('express');
const router = express.Router();
const notificationController = require('./notificationController');
const authMiddleware = require('../Middleware/authenticate');

// Create notification
router.post('/', authMiddleware,notificationController.createNotification);

// Get all notifications
router.get('/', notificationController.getAllNotifications);

// Get notifications by user ID
router.get('/user/:receiverId',authMiddleware, notificationController.getNotificationById);

// Delete notification
router.delete('/:id',authMiddleware, notificationController.deleteNotification);

module.exports = router;

