const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const { check } = require('express-validator');

const User = require('../../models/User');

const {
  authMiddleware,
  adminMiddleware,
  formValidationMiddleware,
  imgUploadMiddleware
} = require('../../middleware/');

const userFormValidator = [
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
];

const adminValidator = [authMiddleware, adminMiddleware];

// { firstname, lastname, email, address,
// facebook, parent, type, avator, password, tokens }
// Register Route
router.post('/users/', userFormValidator, async (req, res) => {
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
});

// GET user specific by Admin
router.get('/users/:id', adminValidator, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user.toJSON());
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

// Admin Get ALL USERS
router.get('/users/', adminValidator, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

// DELETE USER
router.delete('/users/:id', adminValidator, async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.json({ msg: 'Delete Successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

// Update User By Admin
router.put('/users/:id', adminValidator, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

// GET User avator Image
router.get('/users/:id/avator', async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (!user || !user.avator) {
      throw new Error('Avator Doesnt exist');
    }
    // Set Response type as Image
    res.set('content-type', 'image/png');
    res.send(user.avator);
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ errors: error.message });
  }
});

// ADD User Avator Image
router.post(
  '/users/avator',
  [authMiddleware, imgUploadMiddleware.single('avator')],
  async (req, res) => {
    try {
      const buffer = await sharp(req.file.buffer)
        .resize(500, 500)
        .png()
        .toBuffer();
      req.user.avator = buffer;
      await req.user.save();
      res.send();
    } catch (error) {
      console.error(error.message);
      res.status(404).json({ errors: errors.message });
    }
  }
);

module.exports = router;
