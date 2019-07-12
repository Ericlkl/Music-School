const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const validationMiddleware = require('../../middleware/formValidation');
const { secretOrKey } = require('../../config/keys');

const authMiddleware = require('../../middleware/auth');
const User = require('../../models/User');

// User Loaded Route
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
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
    check('password', 'password format invalid').isLength({ min: 6 }),
    validationMiddleware
  ],
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) res.status(400).json({ errors: 'Invalid Credentials' });

      const isCorrectPW = await bcrypt.compare(password, user.password);
      if (!isCorrectPW) res.status(400).json({ errors: 'Invalid Credentials' });

      const payload = { user: { id: user.id } };

      jwt.sign(payload, secretOrKey, { expiresIn: 360000 }, (err, token) => {
        if (err) return res.status(400).json({ errors: 'token error' });
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: 'Server Error !' });
    }
  }
);

module.exports = router;
