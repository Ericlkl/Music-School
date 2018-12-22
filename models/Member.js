const mongoose = require('mongoose');
const {Schema} = mongoose;

const MemberSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    facebook:{
        type:String
    },
    parent:{
        type:[String]
    },
    type: {
        type: String,
    }
})

mongoose.model('members', MemberSchema);