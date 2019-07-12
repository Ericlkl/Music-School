const mongoose = require('mongoose');
const {Schema} = mongoose;

const CourseSchema = new Schema({
    courseName:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    requirement:{
        type:[String]
    },
    fee:{
        type: Number,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    instrument:{
        type:String,
        required: true
    },
    imageURI:{
        type:String
    }
})

module.exports = mongoose.model('courses', CourseSchema);