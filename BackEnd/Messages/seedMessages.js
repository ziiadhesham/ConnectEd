const mongoose = require('mongoose');
const Message = require('./MessagesModel'); // Adjust path as needed
const User = require('../Users/UserModel'); // Adjust path as needed
const messages = require('../../FrontEnd/src/MockData/MessagesData').default; // Adjust path as needed
require('dotenv').config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected for message seeding');

    await Message.deleteMany({});
    console.log('Old messages cleared');

    const users = await User.find({});
    const userIdMap = {};
    users.forEach(user => {
      userIdMap[user.mockId] = user._id;
    });

    const insertedMessagesMap = {};

    for (const m of messages) {
      const newMessage = new Message({
        senderId: userIdMap[m.senderId],
        receiverId: userIdMap[m.receiverId],
        message: m.message,
        image: m.image || '',
        time: new Date(), // You can parse `m.time` if needed
        isReply: m.isReply || false,
        replyTo: m.replyTo ? insertedMessagesMap[m.replyTo] : null
      });

      const saved = await newMessage.save();
      insertedMessagesMap[m.id] = saved._id;
    }

    console.log('Messages seeded successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('MongoDB connection or seeding error:', err);
  });
