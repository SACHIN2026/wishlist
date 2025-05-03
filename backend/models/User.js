import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);