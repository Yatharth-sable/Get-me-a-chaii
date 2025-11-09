import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "chaii", // optional but good practice
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};

export default connectDB;
