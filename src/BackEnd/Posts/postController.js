const Post = require('./PostsModel');

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.user._id,
      time: new Date().toISOString(),
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post', details: err });
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
    const post = await Post.findById(req.params.id).populate('userId', 'username');
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
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const alreadyLiked = post.likes.includes(req.user._id);
    if (alreadyLiked) {
      post.likes.pull(req.user._id);
      post.likesCount--;
    } else {
      post.likes.push(req.user._id);
      post.likesCount++;
    }

    await post.save();
    res.json({ likesCount: post.likesCount });
  } catch (err) {
    res.status(500).json({ error: 'Failed to like/unlike post' });
  }
};

exports.repostPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const alreadyReposted = post.reposts.includes(req.user._id);
    if (alreadyReposted) {
      post.reposts.pull(req.user._id);
      post.repostsCount--;
    } else {
      post.reposts.push(req.user._id);
      post.repostsCount++;
    }

    await post.save();
    res.json({ repostsCount: post.repostsCount });
  } catch (err) {
    res.status(500).json({ error: 'Failed to repost/unrepost' });
  }
};

exports.bookmarkPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const alreadyBookmarked = post.bookmarks.includes(req.user._id);
    if (alreadyBookmarked) {
      post.bookmarks.pull(req.user._id);
      post.bookmarksCount--;
    } else {
      post.bookmarks.push(req.user._id);
      post.bookmarksCount++;
    }

    await post.save();
    res.json({ bookmarksCount: post.bookmarksCount });
  } catch (err) {
    res.status(500).json({ error: 'Failed to bookmark/unbookmark post' });
  }
};

exports.commentOnPost = async (req, res) => {
  try {
    const { text } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.comments.push({
      userId: req.user._id,
      text,
      time: new Date().toISOString()
    });

    await post.save();
    res.status(201).json(post.comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};
