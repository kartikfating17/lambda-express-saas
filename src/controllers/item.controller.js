import Item from "../models/item.model.js";

export const createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json(item);
};

export const getItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

export const updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
};

export const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
