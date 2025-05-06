const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./Users/UserModel');
const Post = require('./Posts/PostsModel');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // allow frontend origin
  credentials: true,               // if you send cookies or auth headers
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

 
// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Platform!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use('/api/posts', require('./Posts/postRoutes'));
app.use('/api/messages', require('./Messages/messageRoutes'));
app.use('/api/folders', require('./Bookmarks//routes/bookmarkFoldersRoutes'));
app.use('/api/bookmarks', require('./Bookmarks/routes/bookmarksRoutes'));