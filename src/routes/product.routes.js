import express from "express";
import Product from "../models/product";

const router = express.Router();

// Seed products (run once)
router.post("/seed", async (_, res) => {
  await Product.insertMany([
    { name: "Basic Plan", price: 199, description: "1 month access" },
    { name: "Pro Plan", price: 499, description: "6 months access" }
  ]);
  res.json({ message: "Products added" });
});

// Get products
router.get("/", async (_, res) => {
  const products = await Product.find();
  res.json(products);
});

export default router;
