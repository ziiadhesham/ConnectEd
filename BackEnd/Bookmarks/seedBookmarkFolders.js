const mongoose = require('mongoose');
const BookmarkFolder = require('./bookmarkfolderModel'); // Adjust path as needed
const User = require('../Users/UserModel'); // Adjust path as needed
const mockFolders = require('../../MockData/bookmarkFoldersData').default; // Adjust path as needed
require('dotenv').config({ path: '../.env' });

const seedBookmarkFolders = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure your .env has MONGO_URI

    // Get all users and map mockIds to ObjectIds
    const users = await User.find({});
    const userIdMap = {};

    users.forEach(user => {
      // Log the user mockId and ObjectId to verify matching
      console.log(`User mockId: ${user.mockId}, ObjectId: ${user._id}`);
      userIdMap[user.mockId] = user._id; // Convert mockid to string for comparison
    });

    console.log('userIdMap:', userIdMap); // Debugging step to check the map

    // Prepare the bookmark folders
    const folderDocs = mockFolders.map(folder => {
      const folderUserId = folder.userId; // The userId in the folder
      const userId = userIdMap[folderUserId]; // Get the corresponding ObjectId from the map

      // Log each folder's userId and match against the userIdMap
      console.log(`Checking folder with userId: ${folder.userId}`);
      console.log(`Mapped ObjectId: ${userId}`);

      // If no userId is found in the map, skip this folder
      if (!userId) {
        console.warn(`⚠️ No user found for folder with userId: ${folder.userId}`);
        return null; // Skip invalid folders
      }

      return {
        name: folder.name,
        userId: userId, // Correct ObjectId for this folder
      };
    }).filter(doc => doc !== null); // Remove any null folders

    // Insert the folders into the database
    await BookmarkFolder.deleteMany(); // Clear existing data
    await BookmarkFolder.insertMany(folderDocs);

    console.log(`✅ Inserted ${folderDocs.length} bookmark folders`);
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding bookmark folders:', err);
    process.exit(1);
  }
};

seedBookmarkFolders();
