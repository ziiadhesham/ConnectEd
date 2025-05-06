const Notification = require('./NotificationsModel');

//create new notification
exports.createNotification = async (req, res) => {
    try {
        const newNotification = await notification.create(req.body);
        res.status(201).json(newNotification);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create notification', details: err });
    }
};

//get all notifications
exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ time: -1 });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notifications', details: err });
    }
};

// Get a single notification by _id
exports.getNotificationById = async (req, res) => {
    console.log(req.params);
    try {
        const notification = await Notification.find({receiverId:req.params.receiverId } );  

        if (!notification) return res.status(404).json({ error: 'Notification not found' });

        res.json(notification);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to fetch notification', details: err });
    }
};



//delete notification by id
exports.deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id);
        if (!notification) return res.status(404).json({ error: 'Notification not found' });
        res.json({ message: 'Notification deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete notification', details: err });
    }
};

