const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');
const { check } = require('express-validator');
const formValidationMiddleware = require('../../middleware/formValidation');

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
// { eventName,company, description, place,
// date, tag, imageURI }
router.post(
  '/',
  [
    check('eventName', 'Please Insert Event name')
      .not()
      .isEmpty(),
    check('company', 'Please Insert Company Name')
      .not()
      .isEmpty(),
    check('description', 'Please Insert Description').isLength({ min: 4 }),
    check('place', 'Please Insert Description')
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
      res.status(500).json({ errors: 'Server Error !' });
    }
  }
);

// Update
router.put(
  '/:id',
  [
    check('eventName', 'Please Insert Event name')
      .not()
      .isEmpty(),
    check('company', 'Please Insert Company Name')
      .not()
      .isEmpty(),
    check('description', 'Please Insert Description').isLength({ min: 4 }),
    check('place', 'Please Insert Description')
      .not()
      .isEmpty(),
    check('fee', 'Please Insert Fee').isInt(),
    formValidationMiddleware
  ],
  async (req, res) => {
    const id = req.params.id;

    try {
      const event = await Event.findByIdAndUpdate(id, req.body);
      res.json(event);
    } catch (error) {
      res.status(500).json({ errors: 'Server Error!' });
    }
  }
);

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Event.findByIdAndDelete(id);
    res.json({ msg: 'Event deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: 'Server Error!' });
  }
});

module.exports = router;
