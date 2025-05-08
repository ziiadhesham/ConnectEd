// BackEnd/Users/UserController.js
const User = require('./UserModel');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');



exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic check — no hashing yet
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};

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
    const userId = req.user._id;
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

// GET search users by username or name
exports.searchUsers = async (req, res) => {
  try {
    const { query } = req.query;
    const users = await User.find({
      $or: [
        { username: { $regex: query, $options: 'i' } },
        { name: { $regex: query, $options: 'i' } }
      ]
    }).select('-password');

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error searching users', details: err.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const userId = req.user._id;
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Check if current password is correct
    //compare passwords without bycrypt
    const isMatch = user.password === currentPassword;
    // const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Incorrect current password' });

    // Hash the new password and update it
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(newPassword, salt);

    // user.password = hashedPassword;
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error changing password', details: err.message });
  }
};
// POST follow a user

exports.toggleFollow = async (req, res) => {
  try {
    const userId = req.params.id;
    const loggedInUserId = req.user._id;

    // Find the user to follow/unfollow
    const userToToggle = await User.findById(userId);
    if (!userToToggle) return res.status(404).json({ error: 'User not found' });

    // Check if the logged-in user is already following the other user
    const alreadyFollowing = userToToggle.followers.includes(loggedInUserId);

    if (alreadyFollowing) {
      // If already following, unfollow (remove from followers and following)
      userToToggle.followers.pull(loggedInUserId);
      await userToToggle.save();

      const loggedInUser = await User.findById(loggedInUserId);
      loggedInUser.following.pull(userId);
      await loggedInUser.save();

      return res.status(200).json({ message: 'Unfollowed successfully' });
    } else {
      // If not following, follow (add to followers and following)
      userToToggle.followers.push(loggedInUserId);
      await userToToggle.save();

      const loggedInUser = await User.findById(loggedInUserId);
      loggedInUser.following.push(userId);
      await loggedInUser.save();

      return res.status(200).json({ message: 'Followed successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error toggling follow', details: err.message });
  }
};





