const Message = require('./MessagesModel');

// Create a new message
exports.createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create({
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      message: req.body.message,
      image: req.body.image || '',
      isReply: req.body.isReply || false,
      replyTo: req.body.replyTo || null,
    });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message', details: err });
  }
};

// Get all messages between two users
exports.getMessagesBetweenUsers = async (req, res) => {
  try {
    const { user1, user2 } = req.params;

   const messages = await Message.find({
  $or: [
    { senderId: user1, receiverId: user2 },
    { senderId: user2, receiverId: user1 }
  ]
})
.sort({ time: 1 })
.populate('senderId', 'name profilePicture')
.populate('receiverId', 'name profilePicture');


    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages', details: err });
  }
};

// Get a message by ID
exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get message', details: err });
  }
};

// Delete a message
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json({ message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete message', details: err });
  }
};
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ time: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages', details: err });
  }
}
// Get all messages involving a specific user (as sender or receiver)
exports.getMessagesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    })
      .sort({ time: -1 })
      .populate("senderId", "name profilePicture")
      .populate("receiverId", "name profilePicture");

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user messages", details: err });
  }
};
