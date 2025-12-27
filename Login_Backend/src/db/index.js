import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB= async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_DB}/Login`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB connection failed",error);
        // Don't exit process in serverless - throw error instead
        // process.exit(1) would kill the serverless function container
        throw error;
    }
}

export default connectDB;