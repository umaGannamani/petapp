import { Router } from "express";
import mongoose from "mongoose";
import Pet from "../models/Pet.js";

const router = Router();

const fallbackPets = [
  { id: "1", name: "Milo", species: "Dog", age: 2, adopted: false },
  { id: "2", name: "Luna", species: "Cat", age: 1, adopted: true },
  { id: "3", name: "Coco", species: "Parrot", age: 4, adopted: false }
];

router.get("/", async (_req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const pets = await Pet.find().sort({ createdAt: -1 });
      return res.json(pets);
    }

    return res.json(fallbackPets);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch pets", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: "MongoDB is not connected. Add MONGO_URI to enable writes." });
    }

    const { name, species, age } = req.body;
    const pet = await Pet.create({ name, species, age });
    return res.status(201).json(pet);
  } catch (error) {
    return res.status(400).json({ message: "Failed to create pet", error: error.message });
  }
});

export default router;
