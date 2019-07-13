const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeacherSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, 'firstname is required !'],
      trim: true
    },
    lastname: {
      type: String,
      required: [true, 'lastname is required !'],
      trim: true
    },
    gender: {
      type: String,
      required: true
    },
    DoB: {
      type: Date
    },
    address: {
      type: String
    },
    phone: {
      type: [Number],
      required: [true, 'phone number is required !']
    },
    facebook: {
      type: String
    },
    qualification: {
      type: String
    },
    skills: {
      type: [String],
      required: [true, 'skills field is required !']
    },
    language: {
      type: [String],
      default: ['English']
    },
    avator: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('teachers', TeacherSchema);
