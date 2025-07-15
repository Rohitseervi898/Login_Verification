import mongoose,{Schema, Types} from "mongoose";
import bcrypt from "bcryptjs";

const OTPSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        reqiured:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength:[6, 'Password must be at least 6 characters long'],
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

OTPSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10)
    next()
})

export const OTP = mongoose.model("OTP",OTPSchema);