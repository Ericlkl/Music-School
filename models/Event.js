const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventSchema = new Schema({
    eventName:{
        type:String,
        required: true
    },
    company:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    place:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        required: true
    },
    tag: {
        type: [String]
    },
    imageURI:{
        type:String
    }
});

mongoose.model('events', EventSchema);