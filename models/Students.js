const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({
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
    }
})

mongoose.model('students', StudentSchema);