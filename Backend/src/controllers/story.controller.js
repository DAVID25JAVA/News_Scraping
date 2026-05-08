import storyModel from "../models/story.model.js";
import scraperStories from "../scraper/scraper.js";

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

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ points: -1 });

    res.status(200).json({
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

export const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

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
