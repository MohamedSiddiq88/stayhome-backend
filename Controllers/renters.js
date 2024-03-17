import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllRenters() {
    return client.db("homestay").collection("renters").find().toArray();
  }

  export function addRenters(renters) {
    return client.db("homestay").collection("renters").insertMany(renters);
  }