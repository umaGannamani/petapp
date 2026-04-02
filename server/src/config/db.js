import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn("MONGO_URI is not set. Running API without MongoDB connection.");
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    return false;
  }
};
