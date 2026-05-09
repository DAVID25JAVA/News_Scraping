# 📰 Hacker News Scraper — MERN Stack

A full-stack web application that scrapes the top 10 stories from [Hacker News](https://news.ycombinator.com), stores them in MongoDB, and displays them through a React frontend with JWT authentication, bookmarking, and pagination.

---

## 🧠 Approach

### Web Scraper
Used `axios` to fetch the raw HTML from Hacker News and `cheerio` to parse and extract story data — title, URL, points, author, and posted time. The scraper runs automatically when the server starts and can also be triggered manually via `POST /api/scrape`. Scraped stories are saved to MongoDB, skipping duplicates using upsert logic.

### Backend
Built with Node.js and Express following an MVC pattern — routes, controllers, models, and middleware are all separated. JWT-based authentication is handled via a custom `auth` middleware that protects private routes. The bookmark feature is a toggle — calling the endpoint adds a bookmark if it doesn't exist, or removes it if it does.

### Frontend
React with React Router for navigation. Authentication state (user, token, login, logout) is managed globally using the Context API so any component can access it without prop drilling. Axios services are used for all API calls with the JWT attached via request headers. Protected routes redirect unauthenticated users to the login page. `lucide-react` is used for icons and `react-hot-toast` for all notifications.

---

## 🛠️ Tech Stack

| Layer | Technology |
| Frontend | React, React Router, Tailwind CSS, lucide-react, react-hot-toast |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Scraping | Axios, Cheerio |
| Auth | JWT, bcryptjs |

---

## ✨ Features

- 🔍 Scrapes top 10 Hacker News stories on server start
- 🔐 JWT-based register & login
- 📑 View all stories sorted by points
- 📖 Story detail page with external link
- 🔖 Bookmark / unbookmark stories (auth required)
- 📋 Protected bookmarks page
- 📄 Pagination support
- 🔔 Toast notifications for all user actions
- ⚡ Clean responsive UI with Tailwind CSS

## ⚙️ Environment Variables

### Backend — create a file at `Backend/.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/hackernews?retryWrites=true&w=majority
JWT_SECRET=any_long_random_secret_string_here
```

> **Note:** `JWT_SECRET` can be any random string. Example: `hackernews_jwt_secret_2024`

## 🚀 How to Run Locally

### Step 1 — Clone the repository

```bash
git clone https://github.com/your-username/hacker-news-mern.git
cd Hacker_News
```

---

### Step 2 — Setup & Run the Backend

```bash
# Navigate into the backend folder
cd Backend

# Install all dependencies
npm install

# Create the .env file (add the variables listed above)
# On Windows:
copy .env.example .env
# On Mac/Linux:
cp .env.example .env

# Start the development server
npm run dev
```

✅ You should see:

```
Server running on port 4000
MongoDB connected
Scraper started — fetching stories from Hacker News...
Stories saved to database
```

> The scraper automatically runs on startup and fetches the top 10 stories. You can also trigger it manually via `POST http://localhost:5000/api/scrape`.

---

### Step 3 — Setup & Run the Frontend

Open a **new terminal window/tab**, then:

```bash
# Navigate into the frontend folder
cd Frontend

# Install all dependencies
npm install

# Start the React development server
npm run dev
```

✅ You should see:

```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

Open your browser and go to **http://localhost:5173**

---

## 📡 API Reference

### Auth
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login and get JWT token | No |

### Stories
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/stories` | Get all stories sorted by points | No |
| GET | `/api/stories?page=1&limit=10` | Paginated stories | No |
| GET | `/api/stories/:id` | Get a single story | No |
| POST | `/api/stories/:id/bookmark` | Toggle bookmark | ✅ Yes |

### Scraper
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/scrape` | Manually trigger the scraper | No |

---

## 🧪 Testing the API (Optional)

You can test the backend using [Postman](https://www.postman.com) or [Thunder Client](https://www.thunderclient.com) (VS Code extension).

**Register a user:**
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

**Login:**
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "123456"
}
```

**Bookmark a story (use token from login response):**
```
POST http://localhost:5000/api/stories/<story_id>/bookmark
Authorization: Bearer <your_jwt_token>
```

---

## 🌐 Live Demo

> 🔗 [Deployed URL](#) *(add after deployment)*

---

## 🐛 Common Issues

**MongoDB connection error**
- Double-check your `MONGO_URI` in `.env` — username/password must match Atlas credentials
- Make sure your IP is whitelisted in Atlas Network Access (`0.0.0.0/0`)

**Port already in use**
- Change `PORT=5000` to `PORT=5001` in `Backend/.env` and update `VITE_API_URL` accordingly

**Scraper returns no stories**
- Hacker News may have changed its HTML structure. Check the scraper selectors in `utils/scraper.js`

**`lucide-react` import error**
- Run `npm install lucide-react` inside the `Frontend` folder