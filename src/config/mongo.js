import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(MONGO_URI, {
    maxPoolSize: 5, // IMPORTANT for Lambda
  });

  console.log("MongoDB connected");
};

export default connectDB;
