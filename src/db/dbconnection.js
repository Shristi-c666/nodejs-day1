import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  const mongoURL = process.env.MONGO_URI;

  if (!mongoURL) {
    console.error("MONGODB_URL is not defined in the environment variables.");
    throw new Error("Missing MongoDB URL");
  }

  
    mongoose
      .connect(mongoURL)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB connection error:", err));
  
};

export default connectDB;
