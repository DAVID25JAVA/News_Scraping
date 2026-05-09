import API from "../api/axios";

export const scrapeStories = async () => {
  try {
    const res = await API.post("/scrape");
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Scraping failed";
  }
};

export const getStories = async (page = 1, limit = 5) => {
  try {
    const res = await API.get(`/stories?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch stories";
  }
};

export const getStoryById = async (id) => {
  try {
    const res = await API.get(`/stories/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch story";
  }
};

export const toggleBookmark = async (id) => {
  try {
    const res = await API.post(`/stories/${id}/bookmark`);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Bookmark action failed";
  }
};
