const express = require('express');
const router = express.Router();
const sharp = require('sharp');

const User = require('../../models/User');
const {
  authMiddleware,
  adminMiddleware,
  imgUploadMiddleware
} = require('../../middleware/');

const adminValidator = [authMiddleware, adminMiddleware];

// GET User avator Image
router.get('/users/:id/avator', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('avator');
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

// Update Users avator Image
router.put(
  '/users/:id/avator',
  [adminValidator, imgUploadMiddleware.single('avator')],
  async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        throw new Error('No User Found !');
      }

      const buffer = await sharp(req.file.buffer)
        .resize(500, 500)
        .png()
        .toBuffer();

      user.avator = buffer;
      await user.save();

      res.json({ msg: 'Success' });
    } catch (error) {
      console.error(error.message);
      res.status(404).json({ errors: error.message });
    }
  }
);

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
