const mongoose = require('mongoose');
const Bookmark = require('./BookmarksModel'); // Adjust the path to your Bookmark model
const User = require('../Users/UserModel'); // Adjust the path to your User model
const Post = require('../Posts/PostsModel'); // Adjust the path to your Post model
const BookmarkFolder = require('./bookmarkfolderModel'); // Adjust path
const mockBookmarks = require('../../FrontEnd/src/MockData/bookmarksData').default; // Adjust the path to your bookmarks data
require('dotenv').config({ path: '../.env' });

const seedBookmarks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Ensure .env has MONGO_URI

    // Fetch all required data (users, posts, and bookmark folders)
    const users = await User.find({});
    const posts = await Post.find({});
    const folders = await BookmarkFolder.find({});

    // Create mappings for quick lookup of ObjectIds
    const userIdMap = {};
    const postIdMap = {};
    const folderIdMap = {};

    users.forEach(user => {
      userIdMap[user.mockId] = user._id; // Map mockid to ObjectId for user
    });

    posts.forEach(post => {
      postIdMap[post.id] = post._id; // Assuming post data uses `id` field
    });

    folders.forEach(folder => {
      folderIdMap[folder.id] = folder._id; // Assuming folder data uses `id` field
    });

    console.log('userIdMap:', userIdMap); // Debugging step
    console.log('postIdMap:', postIdMap); // Debugging step
    console.log('folderIdMap:', folderIdMap); // Debugging step
    const bookmarkDocs = mockBookmarks.map((bookmark, index) => {
      const userId = userIdMap[bookmark.userId];
      const postId = posts[index % posts.length]?._id; // cycle through available posts
      const folderId = folders[index % folders.length]?._id;
    
      if (!userId || !postId || !folderId) {
        console.warn(`⚠️ Missing references for bookmark with id: ${bookmark.id}`);
        return null;
      }
    
      return {
        userId,
        postId,
        folderId
      };
    }).filter(doc => doc !== null);
    
      

    // Insert the bookmarks into the database
    await Bookmark.deleteMany(); // Clear existing data
    await Bookmark.insertMany(bookmarkDocs);

    console.log(`✅ Inserted ${bookmarkDocs.length} bookmarks`);
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding bookmarks:', err);
    process.exit(1);
  }
};

seedBookmarks();
