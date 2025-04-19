import express from "express";
import connectDb from "./db/database";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const port = process.env.port || 3000;

connectDb.then(() => {
    app.listen(port, () =>{
        console.log(`server is ruuning on http://localhost:${port}`)
    })
}).catch((err) => {
    console.error("Failed to coonect to database" ,err)
});