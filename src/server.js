import serverlessExpress from "@vendia/serverless-express";
import app from "./app.js";
import connectDB from "./config/mongo.js";

// Create server ONCE per container
const server = serverlessExpress({ app });

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  // Mongo connection is already cached safely
  await connectDB();

  return server(event, context);
};
