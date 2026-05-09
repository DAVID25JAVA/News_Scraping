import { Router } from "express";
import {
  getMe,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/me", protect, getMe);
userRouter.post("/logout", logout);

export default userRouter;
