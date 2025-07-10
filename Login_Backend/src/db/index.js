import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB= async()=>{
    try{
        const connextionInstance=await mongoose.connect(`${process.env.MONGO_DB}/Login`);
        console.log(`MongoDB connected: ${connextionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB connection failed",error);
        process.exit(1);
    }
}

export default connectDB;