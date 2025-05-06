const mongoose = require('mongoose');
const Notification = require('./NotificationsModel'); // Adjust path as needed
const User = require('../Users/UserModel'); // Adjust path as needed
const notifications = require('../../MockData/NotificationsData').default; // Adjust as needed
require('dotenv').config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected for notification seeding');

    // Step 1: Clear existing notifications
    await Notification.deleteMany({});
    console.log('Existing notifications cleared');

    // Step 2: Fetch all users to map mockId to real MongoDB _id
    const users = await User.find({});
    const userIdMap = {};
    users.forEach(user => {
      userIdMap[user.mockId] = user._id;
    });

    // Step 3: Create and insert notifications
    const notificationsToInsert = notifications.map(n => ({
      type: n.type,
      senderId: userIdMap[n.senderId],
      receiverId: userIdMap[n.receiverId],
      text: n.text || '',
      time: new Date(Date.now() - (1000 * 60 * 60 * 24 * (30 - n.time))), // simulate time spread
      readStatus: false
    }));

    await Notification.insertMany(notificationsToInsert);
    console.log('Notifications seeded successfully');

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('MongoDB error:', err);
  });
