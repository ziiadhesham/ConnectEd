const notification = require('./NotificationsModel');

//create new notification
exports.createNotification = async (req, res) => {
    try {
        const newNotification = await notification.create(req.body);
        res.status(201).json(newNotification);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create notification', details: err });
    }
};

//get notification by id
exports.getNotificationById = async (req, res) => {
    try {
        const notification = await notification.findById(req.params.receiverId);
        if (!notification) return res.status(404).json({ error: 'Notification not found' });
        res.json(notification);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notification', details: err });
    }
};

//delete notification by id
exports.deleteNotification = async (req, res) => {
    try {
        const notification = await notification.findByIdAndDelete(req.params.id);
        if (!notification) return res.status(404).json({ error: 'Notification not found' });
        res.json({ message: 'Notification deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete notification', details: err });
    }
};

