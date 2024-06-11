const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePhoto: { type: String },
  role: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
