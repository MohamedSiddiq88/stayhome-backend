import express from 'express'
import dotenv from "dotenv"
import cors from "cors";
import {BuildingsRouter} from "./Routers/buildings.js"


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

app.use("/buildings",BuildingsRouter)


app.listen(3000,()=>console.log("hellow"));
