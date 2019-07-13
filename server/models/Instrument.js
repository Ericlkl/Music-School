const mongoose = require('mongoose');
const { Schema } = mongoose;

const InstrumentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    instock: {
      type: Number,
      required: true
    },
    img: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('instruments', InstrumentSchema);
