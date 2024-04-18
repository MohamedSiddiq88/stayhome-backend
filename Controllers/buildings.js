import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllBuildings() {
    return client.db("homestay").collection("buildings").find().toArray();
  }

  export function addBuildings(building) {
    // const { name, buildingNumber } = building.newBuilding;
    console.log(name,buildingNumber,building)
    return client.db("homestay").collection("buildings").insertOne({name, buildingNumber});
  }
