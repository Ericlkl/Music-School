const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const authMiddleware = require('../../middleware/auth');
const formValidationMiddleware = require('../../middleware/formValidation');
const User = require('../../models/User');

// { firstname, lastname, email, address,
// facebook, parent, type, avator, password, tokens }
// Register Route
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

// Admin Get ALL USERS
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

// DELETE USER
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.json({ msg: 'Delete Successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

module.exports = router;
