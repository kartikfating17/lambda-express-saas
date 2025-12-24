import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tenantId: { type: String, index: true }
  },
  { timestamps: true }
);

export default mongoose.model("Item", ItemSchema);
