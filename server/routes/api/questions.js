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
// { provider, phone, email, message }
router.post(
  '/',
  [
    check('provider', 'Please Insert Provider name')
      .not()
      .isEmpty(),
    check('phone', 'phone is required')
      .not()
      .isEmpty(),
    check('phone', 'Phone Field Only allows Integer Type').isInt(),
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
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Question deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: 'Server Error!' });
  }
});

module.exports = router;
