import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    postedAt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const storyModel = mongoose.model("Story", storySchema);
export default storyModel;
