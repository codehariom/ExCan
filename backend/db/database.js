import mongoose from "mongoose";
import { dbName } from "./dbName";

const connectDb = async()=>{
    try{
        const connectiionInstance = await mongoose.connect (`${process.env.MongoDb_URL}/${dbName}`);
        console.log(`\n Database Connected on db Host ${connectiionInstance.connect.host}`);
    } catch{
        console.log("Database is not Connected",error);
        process.exit(1);
    }
};

export default connectDb