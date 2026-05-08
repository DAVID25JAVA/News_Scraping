import storyModel from "../models/story.model.js";
import scraperStories from "../scraper/scraper.js";
import userModel from "../models/user.model.js";

export const scrapStoriesInternal = async () => {
  try {
    const stories = await scraperStories();
    if (!stories || stories.length === 0) {
      throw new Error("No stories found");
    }
    await storyModel.deleteMany();
    await storyModel.insertMany(stories);
    return stories;
  } catch (error) {
    console.error(" Error in scrapStoriesInternal:", error.message);
    throw error;
  }
};

export const scrapStories = async (req, res) => {
  try {
    const stories = await scrapStoriesInternal();
    return res.status(200).json({
      message: "Scraping successful",
      count: stories.length,
    });
  } catch (error) {
    if (error.message === "No stories found") {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({
      message: "Scraping failed",
      error: error.message,
    });
  }
};

// get all story
export const getStories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  try {
    const stories = await storyModel
      .find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    const total = await storyModel.countDocuments();

    return res.status(200).json({
      total,
      page,
      limit,
      count: stories.length,
      stories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch stories",
      error: error.message,
    });
  }
};

// storyById
export const getStoryById = async (req, res) => {
  try {
    const story = await storyModel.findById(req.params.id);

    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }

    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching story",
      error: error.message,
    });
  }
};

// bookmark  API
export const toggleBookmark = async (req, res) => {
  const storyId = req.params.id;
  const userId = req.user?._id;
  try {
    const story = await storyModel.findById(storyId);
    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Story not found",
      });
    }
    const user = await userModel.findById(userId);
    const isBookmarked = user.bookmarks.includes(storyId);
    if (isBookmarked) {
      user.bookmarks = user.bookmarks.filter((id) => id.toString() !== storyId);
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Bookmark removed",
        bookmarks: user.bookmarks,
      });
    } else {
      user.bookmarks.push(storyId);
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Bookmarked successfully",
        bookmarks: user.bookmarks,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error toggling bookmark",
      error: error.message,
    });
  }
};
