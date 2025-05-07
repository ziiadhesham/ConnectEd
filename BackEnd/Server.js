const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// require('dotenv').config({ path: './src/BackEnd/.env' });
const User = require('./Users/UserModel');
const Post = require('./Posts/PostsModel');
const Notification = require('./Notifications/NotificationsModel');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

 
app.use('/api/posts', require('./Posts/postRoutes'));
app.use('/api/messages', require('./Messages/messageRoutes'));
app.use('/api/folders', require('./Bookmarks//routes/bookmarkFoldersRoutes'));
app.use('/api/bookmarks', require('./Bookmarks/routes/bookmarksRoutes'));
app.use('/api/notifications', require('./Notifications/notificationsRoutes'));
app.use('/api/users', require('./Users/userRoutes'));




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


