import express from 'express'
import dotenv from "dotenv"
import cors from "cors";
import {BuildingsRouter} from "./Routers/buildings.js"
import { RentersRouter } from './Routers/renters.js';


//configure the envirenment.
dotenv.config()

//initialize express server framework
const PORT=process.env.PORT;
const app=express();


//middleware
app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("Welcome to stayhome backend")
})

app.use("/buildings",BuildingsRouter);
app.use("/renters",RentersRouter);


app.listen(PORT,()=>console.log("hellow"));
