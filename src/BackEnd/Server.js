const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./Users/UserModel');
const Post = require('./Posts/PostsModel');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

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