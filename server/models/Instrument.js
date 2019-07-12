const mongoose = require('mongoose');
const {Schema} = mongoose;

const InstrumentSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    instock:{
        type:Number,
        required: true
    },
    imageURI:{
        type:String
    }
});

module.exports = mongoose.model('instruments', InstrumentSchema);