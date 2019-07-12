const mongoose = require('mongoose');
const {Schema} = mongoose;

const TeacherSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    gender:{
        type: String,
        required: true
    },
    DoB:{
        type: Date
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:[Number],
        required:true
    },
    facebook:{
        type:String
    },
    qualification:{
        type:String
    },
    musicSkill:{
        type:[String],
        required:true
    },
    language:{
        type:[String],
        default: ['English']
    },
    imageURI:{
        type:String
    }
});

module.exports = mongoose.model('teachers', TeacherSchema);