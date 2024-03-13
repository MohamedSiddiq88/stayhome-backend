import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllBuildings() {
    return client.db("homestay").collection("buildings").find().toArray();
  }