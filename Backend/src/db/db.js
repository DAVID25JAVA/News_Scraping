import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `${process?.env?.MONGODB_URI}/News-Scrape`
    );
    console.log("Database connected successfully", connect.connection.host);
  } catch (error) {
    console.log("Database connection error--->", error?.message);
    process.exit(1);
  }
};

export default ConnectDB;
