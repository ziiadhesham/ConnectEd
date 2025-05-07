const mongoose = require('mongoose');
const Post = require('./PostsModel'); // Adjust path as needed
const User = require('../Users/UserModel'); // Adjust path as needed
const postsData = require('../../FrontEnd/src/MockData/PostsData').default; // Adjust as needed
require('dotenv').config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected for post seeding');

    // Optional: Clear existing posts
    await Post.deleteMany({});
    console.log('Existing posts cleared');

    // Step 1: Fetch all users to map mock user IDs to MongoDB ObjectIds
    const users = await User.find({});
    const userIdMap = {};
    users.forEach(user => {
      userIdMap[user.mockId] = user._id; // `mockId` should be added during user seed
    });

    console.log("User ID Map:", userIdMap); // Log the mapping to verify it's correct

    // Step 2: Create and insert posts
    const postIdMap = {}; // optional if you want to use later for repost references
    const createdPosts = [];

    for (const post of postsData) {
      // Log each post before saving
      console.log("Post Data Before Saving:", post);

      const newPost = new Post({
        userId: userIdMap[post.userId], // Make sure this is valid
        time: post.time,
        content: post.content,
        image: post.image || null,
        video: post.video || null,
        comments: (post.comments || []).map(comment => ({
          userId: userIdMap[comment.userId],  // Ensure userId is mapped correctly here
          time: comment.time,
          text: comment.text,
        })),
        likes: (post.likes || []).map(uid => userIdMap[uid]),  // Ensure likes are mapped correctly
        likesCount: post.likesCount || 0,
        reposts: (post.reposts || []).map(pid => new mongoose.Types.ObjectId()),  // placeholder for reposts
        repostsCount: post.repostsCount || 0,
        bookmarks: (post.bookmarks || []).map(uid => userIdMap[uid]),  // Ensure bookmarks are mapped
        bookmarksCount: post.bookmarksCount || 0,
      });

     console.log("New Post Object:", newPost); // Log new post data before saving

      const savedPost = await newPost.save();
      postIdMap[post.id] = savedPost._id;
      createdPosts.push(savedPost);

      // Update the user with the new post ID
      const userMongoId = userIdMap[post.userId];
      await User.findByIdAndUpdate(userMongoId, {
        $push: { posts: savedPost._id }
      });
    }

    console.log('Posts seeded successfully');

    // Optional Step: Update reposts properly using postIdMap
    for (const post of postsData) {
      if (post.reposts?.length) {
        await Post.findByIdAndUpdate(postIdMap[post.id], {
          reposts: post.reposts.map(rid => postIdMap[rid])
        });
      }
    }

    console.log('Reposts updated');

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('MongoDB error:', err);
  });
