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
    type: {
        type: String,
    }
})

mongoose.model('members', MemberSchema);