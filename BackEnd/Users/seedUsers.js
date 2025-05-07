const mongoose = require('mongoose');
const User = require('./UserModel'); // Adjust path as needed
const usersAccounts = require('../../FrontEnd/src/MockData/usersAccountsData').default;
require('dotenv').config({ path: '../.env' });


const idMap = {}; // To map mock IDs to real MongoDB ObjectIds

async function seedUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Create users and store mockId for reference
    for (const user of usersAccounts) {
        console.log(user);
        
      const { id, followers, following, posts, ...rest } = user; // id is mockId
      const createdUser = new User({
        ...rest,
        mockId: id,
        posts: [],
      });
      await createdUser.save();
      idMap[id] = createdUser._id;
    }

    console.log('Users created with mockId');

    // Update followers and following references
    for (const user of usersAccounts) {
      const mongoId = idMap[user.id];
      const updateFields = {};
      if (user.followers?.length) {
        updateFields.followers = user.followers.map(fid => idMap[fid]);
      }
      if (user.following?.length) {
        updateFields.following = user.following.map(fid => idMap[fid]);
      }
      await User.findByIdAndUpdate(mongoId, updateFields);
    }

    console.log('User followers/following updated.');

    mongoose.disconnect();
    return idMap; // Exported for use in post seeding if needed
  } catch (err) {
    console.error('Seeding error:', err);
    console.log('Disconnecting from MongoDB');
    mongoose.disconnect();
  }
}
seedUsers();

module.exports = seedUsers;
