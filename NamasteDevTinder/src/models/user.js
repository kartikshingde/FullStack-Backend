const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      minLength: 4,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value){
        if(!["male","female","others"].includes(value)){
            throw new Error("Gender is not Valid")
        }
      }
    },
    about: {
      type: String,
      default: "This is a default about of a user",
    },
    profileUrl: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/045/944/199/non_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg",
    },
    skills:{
        type:[String]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
