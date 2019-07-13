const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validationMiddleware = require('../../middleware/formValidation');

const authMiddleware = require('../../middleware/auth');
const User = require('../../models/User');

// User Loaded Route
router.get('/', authMiddleware, async (req, res) => {
  try {
    res.json(req.user.toJSON());
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

// Login
router.post(
  '/',
  [
    check('email', 'Please insert valid email').isEmail(),
    check('password', 'password format invalid').isLength({ min: 8 }),
    validationMiddleware
  ],
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: error.message });
    }
  }
);

// Logout Route
router.delete('/', [authMiddleware], async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token != req.headers['x-auth-token'];
    });
    await req.user.save();
    res.json({ msg: 'Logout Success!' });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ errors: error.message });
  }
});

// Logout All Route
router.delete('/all', [authMiddleware], async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.json({ msg: 'Logout All Success!' });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ errors: error.message });
  }
});

module.exports = router;
