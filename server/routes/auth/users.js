const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { secretOrKey } = require('../../config/keys');

const authMiddleware = require('../../middleware/auth');
const formValidationMiddleware = require('../../middleware/formValidation');
const User = require('../../models/User');

// Register Route
// { firstname, lastname, email, address,
// facebook, parent, type, avator, password, tokens }

router.post(
  '/',
  [
    check('firstname', 'firstname can not be empty')
      .not()
      .isEmpty(),
    check('lastname', 'lastname can not be empty')
      .not()
      .isEmpty(),
    check('email', 'Please insert valid Email').isEmail(),
    check(
      'password',
      'Password must be over 6 or more charactrers long'
    ).isLength({ min: 6 }),
    formValidationMiddleware
  ],
  async (req, res) => {
    try {
      // Check Exist User, If true, not allow create
      let user = await User.findOne({ email: req.body.email });
      if (user) throw new Error('User already exist!');

      user = new User(req.body);

      const token = await user.generateAuthToken();
      res.send({ user: user.toJSON(), token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: error.message });
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

module.exports = router;
