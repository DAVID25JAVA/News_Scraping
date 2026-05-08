import { Router } from "express";
import {
  getStories,
  getStoryById,
  scrapStories,
} from "../controllers/story.controller.js";

const storyRouter = Router();

storyRouter.post("/scrape", scrapStories);
storyRouter.get("/stories", getStories);
storyRouter.get("/stories/:id", getStoryById);

export default storyRouter;
