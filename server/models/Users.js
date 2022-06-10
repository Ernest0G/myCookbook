const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;