// models/User.js
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    mockId: {
        type: String,
      },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed in production!
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  profilePicture: { type: String },
  bio: { type: String },
  createdAt: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('User', userSchema);

