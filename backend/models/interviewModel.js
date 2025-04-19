import mongoose from "mongoose";


// schema 
const interviewModel = new mongoose.Schema({
    interviewId:{
        type:String
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"users"
    },
    skills:{
        type:String
    },
    role:{
        type:String,
        enum:["Students","Teacher"],
        default:"Student"
    },
    experience:{
        type:Number
    },
    questionId:{
        type:mongoose.SchemaType.ObjectId,
        ref:"question"
    },
    rating:{
        type:Number
    },
},{
    timestamps:true
})

// user model 
export const interview = mongoose.model("interview" , interviewModel);