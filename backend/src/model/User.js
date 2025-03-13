import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory'],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is mandatory"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Email invalid"]
    },
    password: {
        type: String,
        required: [true, "Password is mandatory"],
        minlength: [6, 'Minimal is 5 character'],
        select: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;