import express from "express";
import { getAllRenters } from "../Controllers/renters.js";

const router = express.Router();

router.get("/all", async (req, res) => {
    try {
      const renters = await getAllRenters();
      if (renters.length <= 0) {
        res.status(400).send("renters not found");
        return;
      }
      res.status(200).json(renters);
    } catch (error) {
      res.status(500).json("Internal server error");
    }
  });

  router.post("/add", async (req, res) => {
    try {
      const newRenter = req.body;
      if (!newRenter) {
        return res.status(400).send({ data: "No renter details provided" });
      }
      const result = await addRenters(newRenter);
      res.status(200).send({
        data: { result: result, message: "New renter item added successfully" },
      });
    } catch (error) {
      res.status(500).send({ data: error });
    }
  });


export const RentersRouter = router;
