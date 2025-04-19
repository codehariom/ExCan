import mongoose from "mongoose";
import { answers } from "./answerModel";

const questionModel = new mongoose.Schema({
    questionId:{
        type:String,
        unique:true
    },
    question:{
        type:String
    },
    answerId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"answers"
    },
},{
    timestamps:true
})