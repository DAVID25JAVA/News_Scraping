import axios from "axios";
import * as cheerio from "cheerio";

const scraperStories = async () => {
  const url = process.env.SCRAPER_API_URL || "https://news.ycombinator.com";

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const stories = [];

  $(".athing").each((i, el) => {
    if (i >= 10) return;

    const titleElement = $(el).find(".titleline a");
    const title = titleElement.text().trim();
    const storyUrl = titleElement.attr("href");

    const subtext = $(el).next();
    const points = parseInt(subtext.find(".score").text()) || 0;
    const author = subtext.find(".hnuser").text().trim();
    const postedAt =
      subtext.find(".age").attr("title") || subtext.find(".age").text().trim();

    if (title) {
      stories.push({
        title,
        url: storyUrl,
        points,
        author,
        postedAt,
      });
    }
  });
   
  return stories;
};

export default scraperStories;
