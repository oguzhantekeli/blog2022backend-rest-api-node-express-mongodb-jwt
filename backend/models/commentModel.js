const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Blog",
    },
    commentOwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    commentOwnerName: {
      type: String,
      required: true,
    },
    commentOwnerAvatar: {
      type: String,
      required: true,
      default: "default",
    },
    commentText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema, "comments");
