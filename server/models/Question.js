const mongoose = require('mongoose');
const {Schema} = mongoose;

const QuestionSchema = new Schema({
    provider:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    },
    message:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('questions', QuestionSchema);