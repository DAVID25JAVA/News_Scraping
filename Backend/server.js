import express from "express";
import dotenv from "dotenv";
dotenv.config();
import ConnectDB from "./src/db/db.js";
import cors from "cors";
import scraperStories from "./src/scraper/scraper.js";
import storyRouter from "./src/routes/scrape.route.js";
import { scrapStoriesInternal } from "./src/controllers/story.controller.js";
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

const allowOrigin = ["http://localhost:5173", ""];
app.use(
  cors({
    origin: allowOrigin,
    credentials: true,
  })
);

// Story API----->
app.use("/api", storyRouter);
// Auth API---->
app.use("/api/auth", userRouter)

const startServer = async () => {
  await ConnectDB();

  const PORT = process?.env?.PORT || 4000;

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    try {
      await scrapStoriesInternal();
    } catch (error) {
      console.error("Initial scrape failed:", error.message);
    }
  });
};

startServer();
