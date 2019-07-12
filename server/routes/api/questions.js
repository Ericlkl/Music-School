const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const { check } = require('express-validator');
const formValidationMiddleware = require('../../middleware/formValidation');

// Get all question route
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

// Add question route
// { provider, phoneNumber, email, message }
router.post(
  '/',
  [
    check('provider', 'Please Insert Provider name')
      .not()
      .isEmpty(),
    check('email', 'Please Insert email').isEmail(),
    check('message', 'Please Insert Message')
      .not()
      .isEmpty(),
    formValidationMiddleware
  ],
  async (req, res) => {
    try {
      const newQuestion = await new Question(req.body).save();
      res.send(newQuestion);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: 'Server Error !' });
    }
  }
);

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Question.findByIdAndDelete(id);
    res.json({ msg: 'Instrument deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: 'Server Error!' });
  }
});

module.exports = router;
