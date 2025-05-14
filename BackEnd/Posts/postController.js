const Post = require('./PostsModel');
const User = require('../Users/UserModel'); // adjust the path as needed




exports.createPost = async (req, res) => {
  try {
    console.log('REQ BODY:', req.body);
    console.log('REQ FILE:', req.file);

    const { content, userId , Image} = req.body;
    

    const newPost = new Post({
      content,
      userId,
      image: Image,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error('CREATE POST ERROR:', err); // ← ADD THIS
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username').sort({ time: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('userId', 'username profilePicture') // Populate user details for the post's author
      .populate('comments.userId', 'username profilePicture') // Populate user details for comment authors
      .populate('likes', 'username profilePicture') // Populate user details for users who liked the post
      .populate('reposts', 'username profilePicture') // Populate user details for users who reposted the post
      .exec();
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

    exports.updatePost = async (req, res) => {
        console.log('req.user:', req.params.id);
    try {
        const post = await Post.findById(req.params.id);
        console.log('post:', post);
        if (!post ) {
            // if (!post || post.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'Not authorized' });
        }
        

    Object.assign(post, req.body);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post || !post.userId.equals(req.user._id)) {
      return res.status(403).json({ error: 'Not authorized' });
    }
    await post.remove();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { id, userId } = req.params;
    console.log(`Post ID: ${id}, User ID: ${userId}`);

    const post = await Post.findById(id);
    const user = await User.findById(userId);

    if (!post) {
      console.log('Post not found');
      return res.status(404).json({ error: 'Post not found' });
    }

    const alreadyLiked = post.likes.includes(userId);
    console.log(`Already liked? ${alreadyLiked}`);

    if (alreadyLiked) {
      post.likes.pull(userId);
      post.likesCount--;
    } else {
      post.likes.push(userId);
      post.likesCount++;
    }

    await post.save();
    res.json({ likesCount: post.likesCount });
  } catch (err) {
    console.error('Like post error:', err);
    res.status(500).json({ error: 'Failed to like/unlike post' });
  }
};


exports.repostPost = async (req, res) => {
  try {
    const { id, userId } = req.params;
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const alreadyReposted = post.reposts.includes(userId);
    if (alreadyReposted) {
      post.reposts.pull(userId);
      post.repostsCount--;
    } else {
      post.reposts.push(userId);
      post.repostsCount++;
    }

    await post.save();
    res.json({ repostsCount: post.repostsCount });
  } catch (err) {
    console.error('Repost error:', err);
    res.status(500).json({ error: 'Failed to repost/unrepost' });
  }
};




exports.commentOnPost = async (req, res) => {
  try {
    const { id, userId } = req.params;
    const { text } = req.body;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.comments.push({
      userId,
      text,
      time: new Date().toISOString()
    });

    await post.save();
    res.status(201).json(post.comments);
  } catch (err) {
    console.error('Comment error:', err);
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

const mongoose = require('mongoose');

exports.getMyPosts = async (req, res) => {
  try {
    console.log("🔍 Incoming getMyPosts request...");
    console.log("🧠 req.user =", req.user);

    const userId = req.user._id;
    if (!userId) {
      console.log("❌ No user ID found in token");
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const objectId = new mongoose.Types.ObjectId(userId);
    console.log("✅ Converted ObjectId:", objectId);

    const posts = await Post.find({ userId: objectId }).sort({ time: -1 });

    console.log("✅ Posts fetched successfully:", posts.length);
    res.status(200).json(posts);
  } catch (err) {
    console.error("❌ getMyPosts crashed:");
    console.error(err.stack); // print full stack trace
    res.status(500).json({
      error: 'Failed to fetch post',
      details: err.message,
    });
  }
};



