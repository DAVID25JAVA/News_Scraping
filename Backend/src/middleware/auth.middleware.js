import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    // console.log("toekn-->", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please login first",
      });
    }

    const decode = jwt.verify(token, process?.env?.JWT_SECRET);
    // console.log("Decode-->", decode);
    const user = await userModel.findById(decode.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
