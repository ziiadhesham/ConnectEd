const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./Users/UserModel');
const Post = require('./Posts/PostsModel');
const bcrypt = require('bcryptjs');

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
// Example using Express
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists in MongoDB (via Studio 3T)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // 2. Validate password (hashed)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // 3. Return JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
const bcrypt = require('bcryptjs');

// Signup Endpoint
// Add this to your signup route for debugging
app.post('/api/users/signup', async (req, res) => {
  console.log("Signup request received"); // Check if route is hit
  try {
    const { email, username } = req.body;
    console.log("Received:", { email, username }); // Log incoming data

    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      console.log("Duplicate detected"); // Debug duplicates
      return res.status(400).json({ error: 'Email or username exists' }); // MUST return JSON
    }

    const user = await User.create(req.body);
    console.log("User created:", user._id); // Confirm creation
    res.status(201).json({ success: true }); // Explicit JSON response
  } catch (err) {
    console.error("Signup error:", err); // Log full error
    res.status(500).json({ error: err.message }); // Error as JSON
  }
});

// server.js
console.log("Server is running!");
process.exit();