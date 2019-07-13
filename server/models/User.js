const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/keys');

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
      unique: [true, 'User already exist !'],
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is not valid ');
        }
      }
    },
    password: {
      type: String,
      required: [true, 'password is required!'],
      minlength: 8
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
      type: String,
      trim: true,
      default: 'Student'
    },
    avator: {
      type: String
    },
    tokens: {
      type: [
        {
          token: {
            type: String,
            required: [true, 'token is required']
          }
        }
      ]
    }
  },
  {
    timestamps: true
  }
);

UserSchema.methods.toJSON = function() {
  // Copy a user to an object variable
  const user = this.toObject();
  // Remove password and tokens
  delete user.password;
  delete user.tokens;
  // Send User Details back
  return user;
};

UserSchema.methods.generateAuthToken = async function() {
  const user = this;

  const token = jwt.sign({ userID: user.id }, secretOrKey, {
    expiresIn: 360000
  });

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// Schema Object Method
UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid Credentials');
  const isValidPW = await bcrypt.compare(password, user.password);
  if (!isValidPW) throw new Error('Invalid Credentials');

  return user;
};

// Before Save middleware
UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
