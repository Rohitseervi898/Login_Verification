import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { generateOTP, sendOTPEmail } from "../utils/OTPSender.js";
import { OTP } from "../models/OTP.model.js";

// Access And Refresh Token Generating function
const generateAccessAndRefreshTokens = async(userid)=>{
    try{
        const user = await User.findById(userid);
        const accessToken=user.generateAccessToken();
        const refreshToken=user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});
        
        return {accessToken, refreshToken};
    }catch(error){
        throw new ApiError(500, error+"Error generating tokens");
    }
}

// Registration and OTP generation function
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

    const otp = generateOTP();//otp generating function

    await sendOTPEmail(email, otp);

    await OTP.findOneAndDelete({email:email.toLowerCase()});
    await OTP.create({
        email: email.toLowerCase(),
        username,
        password,
        otp
    })

    // const user = await User.create({
    //     username:username.toLowerCase(),
    //     email:email.toLowerCase(),
    //     password,
    // })

    return res
    .status(201)
    .json(new ApiResponse(201,"you have 5 min", "User registered successfully"));
})

// OTP Verification Function
const VerifyOTP = asyncHandler(async(req,res)=>{
    const {email,otp}=req.body;
    if(!email || !otp){
        throw new ApiError(400, "Email and OTP are required");
    }
    const otpRecord = await OTP.findOne({email:email.toLowerCase()});

    if(!otpRecord){
        throw new ApiError(404, "OTP is Expired");
    }

    if(otpRecord.otp !== otp){
        throw new ApiError(400, "Invalid OTP");
    }

    const {username,password}=otpRecord;

    const user = await User.create({
        username:username.toLowerCase(),
        email:email.toLowerCase(),
        password,
    })

    await OTP.findOneAndDelete({email: email.toLowerCase()});

    return res
    .status(200)
    .json(new ApiResponse(200, user, "OTP verified successfully"));
})

// Login function
const LoginUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        throw new ApiError(400, "Email and password are required");
    }
    const user = await User.findOne({email: email.toLowerCase()});
    if(!user){
        throw new ApiError(404, "User not found");
    }
    const isValidPassword=await user.isPasswordCorrect(password);
    if(!isValidPassword){
        throw new ApiError(401, "Invalid password");
    }
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

    return res
    .status(200)
    .json(new ApiResponse(200, {user, accessToken, refreshToken}, "Login successful"));
})

export {registerUser, LoginUser, VerifyOTP};