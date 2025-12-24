import express from "express";
import {
  createItem,
  getItem,
  updateItem,
  deleteItem
} from "../controllers/item.controller.js";

const router = express.Router();

router.post("/", createItem);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
