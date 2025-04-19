import mongoose from "mongoose";


const userModel = new mongoose.Schema({
    userId:{
        type:Number,
        require:true,
        unique:true
    },
    FullName:{
        type:String,
        require:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type: Number,
        trim:true,
        require:true,
        unique:true
    },
    resumeLink:{
        type:String,
    },
    interview:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"interview"
    },
    profilePicture:{
        type:String
    },
},{
    timestamps:true
})

// hash password

// compare password

// generate access token

// generate reset password

// pic uplode using coloudinary 

// model 
export const users = mongoose.model("users",userModel);
