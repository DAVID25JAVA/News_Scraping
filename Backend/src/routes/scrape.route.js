import { Router } from "express";
import {
  getStories,
  getStoryById,
  scrapStories,
  toggleBookmark,
} from "../controllers/story.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const storyRouter = Router();

storyRouter.post("/scrape", scrapStories);
storyRouter.get("/stories", getStories);
storyRouter.get("/stories/:id", getStoryById);
storyRouter.post("/stories/:id/bookmark", protect, toggleBookmark);

export default storyRouter;
