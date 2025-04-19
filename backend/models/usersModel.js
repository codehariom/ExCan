import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    userId:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
        lowercase:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
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
export const users = mongoose.model("users",userModel);
