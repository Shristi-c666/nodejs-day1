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

  try {
    await mongoose.connect(mongoURL);
    console.log("Successfully connected to MongoDB.");
  } catch (err) {
    console.error(`Could not connect to MongoDB: ${err.message}`);
    throw err;
  }
};

export default connectDB;
