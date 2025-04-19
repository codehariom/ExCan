import mongoose from "mongoose";

const answerModel = new mongoose.schema({
answersId:{
    type:String,
    require:true
},
interviewId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:"interview"
},
questionId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:"question"
},
userAnswer:{
    type:String
},
ai_Feedback:{
    type:String
},
score:{
    type:Number
},
},{
    Timestamp:true
})

export const answers = mongoose.model("answers" ,answerModel);
