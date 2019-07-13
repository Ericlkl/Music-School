const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const QuestionSchema = new Schema(
  {
    provider: {
      type: String,
      required: [true, 'Provider name is required'],
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Provider's email address is required"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    phone: {
      type: Number,
      required: [true, 'Provider phone number is required']
    },
    message: {
      type: String,
      required: [true, 'Please Enter the message for the question']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('questions', QuestionSchema);
