const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true }, 
    //phoneNumber: { type: Number, required: false },
    //avatar: { type: Image, required: false }
  });

module.exports = mongoose.model('User', userSchema);