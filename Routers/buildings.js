import express from "express";
import {  getAllBuildings } from "../Controllers/buildings.js";
import { addBuildings } from "../Controllers/buildings.js";
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

  router.post("/add", async (req, res) => {
    try {
      const newBuilding = req.body;
      if (!newBuilding) {
        return res.status(400).send({ data: "No building details provided" });
      }
      const result = await addBuildings(newBuilding);
      res.status(200).send({
        data: { result: result, message: "New building item added successfully" },
      });
    } catch (error) {
      res.status(500).send({ data: error });
    }
  });


export const BuildingsRouter = router;
