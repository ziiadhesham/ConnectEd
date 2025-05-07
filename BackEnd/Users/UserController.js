// BackEnd/Users/UserController.js
const User = require('./UserModel');

// GET all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error getting users', details: err.message });
  }
};

// POST create user
exports.createUser = async (req, res) => {
  try {
    const { mockId, email, password, name, username, profilePicture, bio } = req.body;

    const user = new User({
      mockId,
      email,
      password,
      name,
      username,
      profilePicture,
      bio,
    });

    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Error creating user', details: err.message });
  }
};
