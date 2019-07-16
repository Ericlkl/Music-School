const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    tag: {
      type: [String]
    },
    img: {
      type: Buffer,
      select: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('events', EventSchema);
