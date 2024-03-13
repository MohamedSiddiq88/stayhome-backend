import express from "express";
import { getAllBuildings } from "../Controllers/buildings.js";

const router = express.Router();

router.get("/all", async (req, res) => {
    try {
      const buildings = await getAllBuildings();
      if (buildings.length <= 0) {
        res.status(400).send("buildings not found");
        return;
      }
      res.status(200).json(buildings);
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  });

export const BuildingsRouter = router;
