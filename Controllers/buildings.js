import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllBuildings() {
    return client.db("homestay").collection("buildings").find().toArray();
  }

  export function addRenters(renters) {
    return client.db("homestay").collection("buildings").insertMany(renters);
  }