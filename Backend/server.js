import express from "express";
import dotenv from "dotenv";
dotenv.config();
import ConnectDB from "./src/db/db.js";
import cors from "cors";

const app = express();
await ConnectDB();

app.use(express.json());

const allowOrigin = ["http://localhost:5173", ""];
app.use(
  cors({
    allowOrigin: allowOrigin,
    credentials: true,
  })
);

app.get((req, res) => {
  res.send(`API working fine......`);
});

const PORT = process?.env?.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
