const User = require('../Users/UserModel'); // Assuming this is your User model

module.exports = async (req, res, next) => {
  const userId = req.header('x-user-id'); // Assuming you are using x-user-id header for authentication

  if (!userId) {
    return res.status(401).json({ error: 'Missing x-user-id header' });
  }

  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user; // Attach the user to the request object
    next(); // Move to the next middleware or controller
  } catch (err) {
    console.error(err); // Log any errors during DB lookup
    res.status(500).json({ error: 'Failed to authenticate user' });
  }
};
