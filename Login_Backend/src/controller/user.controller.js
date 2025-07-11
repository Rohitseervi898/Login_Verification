import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req,res)=>{
    const {username, email, password}= req.body;
    if(!username || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }
    const existedUser = await User.findOne({
        $or:[{username: username.toLowerCase()}, {email: email.toLowerCase()}]
    })
    if(existedUser){
        throw new ApiError(400,"User already existed");
    }

    const user = await User.create({
        username:username.toLowerCase(),
        email:email.toLowerCase(),
        password,
    })

    return res
    .status(201)
    .json(new ApiResponse(201,user, "User registered successfully"));
})

export {registerUser};