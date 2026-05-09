import axios from "axios";

const API = axios.create({
  baseURL: "https://news-scraping-sigma.vercel.app/api",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;