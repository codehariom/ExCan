import mongoose from "mongoose";
import { dbName } from "./dbName.js";

const connectDb = async()=>{
    try{
        const connectionInstance = await mongoose.connect (`${process.env.MONGODB_URL}/${dbName}`);
        console.log(`\n Database Connected on db Host ${connectionInstance.connection.host}`);
    } 
    catch(error){
        console.log("Database is not Connected",error);
        process.exit(1);
    }
};

export default connectDb