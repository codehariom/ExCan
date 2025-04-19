import mongoose from "mongoose";

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
        enum:["Students","Teacher"]
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

export const interview = mongoose.model("interview" , interviewModel);