const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');
const { check } = require('express-validator');

const {
  authMiddleware,
  adminMiddleware,
  formValidationMiddleware
} = require('../../middleware/');

// Get All Event Route
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

// Add new Event route
// { name, company, desc, place,
// date, tag, img }
router.post(
  '/',
  [
    authMiddleware,
    adminMiddleware,
    check('name', 'Please Insert Event name')
      .not()
      .isEmpty(),
    check('company', 'Please Insert Company Name')
      .not()
      .isEmpty(),
    check('desc', 'Please Insert Event Description').isLength({ min: 4 }),
    check('place', 'Please Insert Event Place')
      .not()
      .isEmpty(),
    check('date', 'Please Insert Event Date')
      .not()
      .isEmpty(),
    formValidationMiddleware
  ],
  async (req, res) => {
    try {
      const newEvent = await new Event(req.body).save();
      res.json(newEvent);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: error.message });
    }
  }
);

// Update
router.put(
  '/:id',
  [
    authMiddleware,
    adminMiddleware,
    check('name', 'Please Insert Event name')
      .not()
      .isEmpty(),
    check('company', 'Please Insert Company Name')
      .not()
      .isEmpty(),
    check('desc', 'Please Insert Event Description').isLength({ min: 4 }),
    check('place', 'Please Insert Event Place')
      .not()
      .isEmpty(),
    check('date', 'Please Insert Event Date')
      .not()
      .isEmpty(),
    formValidationMiddleware
  ],
  async (req, res) => {
    try {
      const event = await Event.findByIdAndUpdate({
        _id: req.params.id,
        ...req.body
      });

      res.json(event);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: error.message });
    }
  }
);

router.delete('/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    await Event.findByIdAndDelete({ _id: req.params.id });
    res.json({ msg: 'Event deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
});

module.exports = router;