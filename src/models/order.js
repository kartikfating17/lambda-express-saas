import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: mongoose.Schema.Types.ObjectId,
    razorpayOrderId: String,
    razorpayPaymentId: String,
    amount: Number,
    status: {
      type: String,
      enum: ["CREATED", "PAID"],
      default: "CREATED"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
