const Bookmark = require('../BookmarksModel');

// Create a bookmark using userId, postId, and folderId
exports.createBookmark = async (req, res) => {
  try {
    const { userId, postId, folderId } = req.body;

    if (!userId || !postId || !folderId) {
      return res.status(400).json({ error: 'userId, postId, and folderId are required' });
    }

    const bookmark = await Bookmark.create({ userId, postId, folderId });
    res.status(201).json(bookmark);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all bookmarks in a specific folder
exports.getBookmarksByFolder = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ folderId: req.params.folderId })
      .populate('postId');
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookmarks for a specific user
exports.getBookmarksByUser = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.params.userId })
      .populate('postId')
      .populate('folderId'); // Optional: shows which folder it's in
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a bookmark by its ID
exports.deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bookmark deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get bookmarks by both userId and folderId
exports.getBookmarksByUserAndFolder = async (req, res) => {
  try {
    const { userId, folderId } = req.params;

    const bookmarks = await Bookmark.find({ userId, folderId })
      .populate('postId')
      .populate('folderId'); // optional
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get all bookmarks
exports.getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find()
      // .populate('postId')
      // .populate('folderId')
      // .populate('userId'); // optional, depending on your needs
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
