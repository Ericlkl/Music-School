const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, 'firstname is required'],
      trim: true
    },
    lastname: {
      type: String,
      required: [true, 'lastname is required!'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is not valid ');
        }
      }
    },
    address: {
      type: String
    },
    facebook: {
      type: String
    },
    parent: {
      type: [String]
    },
    type: {
      type: String
    },
    avator: {
      type: String
    },
    password: {
      type: String,
      required: [true, 'password is required!'],
      minlength: 8,
      select: false
    },
    tokens: {
      type: [
        {
          token: {
            type: String,
            required: [true, 'token is required']
          }
        }
      ],
      select: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('users', UserSchema);
