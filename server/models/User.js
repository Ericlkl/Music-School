const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
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
        required: true,
        unique: true
    },
    address:{
        type: String
    },
    facebook:{
        type:String
    },
    parent:{
        type:[String]
    },
    type: {
        type: String,
    },
    avator: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema);