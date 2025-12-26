import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

// Global cache (important for Lambda)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // If already connected, reuse it
  if (cached.conn) {
    return cached.conn;
  }

  // If connection is in progress, wait for it
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 3000, // FAIL FAST if Mongo is down
      socketTimeoutMS: 3000,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected");
    return cached.conn;
  } catch (error) {
    cached.promise = null; // allow retry next invocation
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
