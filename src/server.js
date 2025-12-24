import awsServerlessExpress from "aws-serverless-express";
import app from "./app.js";
import connectDB from "./config/mongo.js";

const server = awsServerlessExpress.createServer(app);

// DB connection reused across invocations
let isConnected = false;

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }

  return awsServerlessExpress.proxy(server, event, context);
};
