import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async(userid)=>{
    try{
        const user = await User.findById(iserid);
        const accessToken=user.generateAccessToken();
        const refreshToken=user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});
        
        return {accessToken, refreshToken};
    }catch(error){
        throw new ApiError(500, "Error generating tokens");
    }
}

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

const LoginUser = asyncHandler(async(req,res)=>{
    const [email,password]=req.body;
    if(!email || !password){
        throw new ApiError(400, "Email and password are required");
    }
    const user = await User.findOne({email: email.toLowerCase()});
    if(!user){
        throw new ApiError(404, "User not found");
    }
    const isValidPassword=await user.isValidPassword(password);
    if(!isValidPassword){
        throw new ApiError(401, "Invalid password");
    }
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

    return res
    .status(200)
    .json(new ApiResponse(200, {user, accessToken, refreshToken}, "Login successful"));
})

export {registerUser};