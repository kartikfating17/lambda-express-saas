import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/payment", paymentRoutes);

app.get("/health", (_, res) => res.json({ ok: true }));

export default app;
