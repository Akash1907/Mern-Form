const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    mobileNumber: Number
});

const User = mongoose.model('userInfo', userSchema);

module.exports = User;