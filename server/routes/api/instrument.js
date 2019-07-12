const express = require('express');
const router = express.Router();
const Instrument = require('../../models/Instrument');

const { check } = require('express-validator');
const formValidationMiddleware = require('../../middleware/formValidation');

// Get All Instruments Route
router.get('/', async (req, res) => {
  try {
    const instruments = await Instrument.find();
    res.send(instruments);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

// Add new Instrument route
// {name,status,description,price,instock,imageURI}
router.post(
  '/',
  [
    check('name', 'Please Insert Instrument name')
      .not()
      .isEmpty(),
    check('status', 'Please Insert status')
      .not()
      .isEmpty(),
    check('description', 'Please Insert Description').isLength({ min: 4 }),
    check('price', 'Please Insert Price').isInt(),
    check('instock', 'Please inStock').isInt(),
    formValidationMiddleware
  ],
  async (req, res) => {
    try {
      const newInstrument = await new Instrument(req.body).save();
      res.send(newInstrument);
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
    check('name', 'Please Insert Instrument name')
      .not()
      .isEmpty(),
    check('status', 'Please Insert status')
      .not()
      .isEmpty(),
    check('description', 'Please Insert Description').isLength({ min: 4 }),
    check('price', 'Please Insert Price').isInt(),
    check('instock', 'Please inStock').isInt(),
    formValidationMiddleware
  ],
  async (req, res) => {
    const id = req.params.id;

    try {
      const instrument = await Instrument.findByIdAndUpdate(id, req.body);
      res.json(instrument);
    } catch (error) {
      res.status(500).json({ errors: 'Server Error!' });
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    await Instrument.findByIdAndDelete(id);
    res.json({ msg: 'Instrument deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: 'Server Error!' });
  }
});

module.exports = router;
