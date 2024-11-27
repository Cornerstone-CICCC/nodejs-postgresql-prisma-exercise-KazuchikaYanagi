// Set up your server
import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes";
dotenv.config();

// Create server
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRouter);

// Start server
const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
