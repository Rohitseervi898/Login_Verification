import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        reqiured:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength:[6, 'Password must be at least 6 characters long'],
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

export const User=mongoose.model('User',userSchema);
