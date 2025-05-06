const BookmarkFolder = require('..//bookmarkfolderModel');

exports.createFolder = async (req, res) => {
  try {
    const folder = await BookmarkFolder.create(req.body);
    res.status(201).json(folder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getFoldersByUser = async (req, res) => {
  try {
    const folders = await BookmarkFolder.find({ userId: req.params.userId });
    res.json(folders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFolder = async (req, res) => {
  try {
    const folder = await BookmarkFolder.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    res.json(folder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteFolder = async (req, res) => {
  try {
    await BookmarkFolder.findByIdAndDelete(req.params.id);
    res.json({ message: 'Folder deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllFolders = async (req, res) => {
  try {
    const folders = await BookmarkFolder.find();
    res.json(folders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
