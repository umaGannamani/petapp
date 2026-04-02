import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./config/db.js";
import petRoutes from "./routes/pets.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "petapp-api" });
});

app.use("/api/pets", petRoutes);

connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
