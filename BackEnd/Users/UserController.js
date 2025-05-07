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
// PUT update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, bio, profilePicture } = req.body;

    // First update the user
    await User.findByIdAndUpdate(
      userId,
      { username, bio, profilePicture },
      { new: true, runValidators: true }
    );

    // Then fetch the updated user excluding the password
    const updatedUser = await User.findById(userId).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: 'Error updating profile', details: err.message });
  }
};



