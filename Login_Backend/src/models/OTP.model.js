import mongoose,{Schema, Types} from "mongoose";

const OTPSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    otp:{
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
        expires: '5m' // OTP will expire after 5 minutes
    }
})

export const OTP = mongoose.model("OTP",OTPSchema);