import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Emails is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },

    bookmarks: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Story",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;