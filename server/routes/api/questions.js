const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const { check } = require('express-validator');
const {
  adminMiddleware,
  authMiddleware,
  formValidationMiddleware
} = require('../../middleware/');

const adminValidator = [authMiddleware, adminMiddleware];
const QuestionFormValidator = [
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
];

// Get all question route
router.get('/questions', adminValidator, async (req, res) => {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

// Add question route
// { provider, phone, email, message }
router.post(
  '/questions',
  [...adminValidator, ...QuestionFormValidator],
  async (req, res) => {
    try {
      const newQuestion = await new Question(req.body).save();
      res.send(newQuestion);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: error.message });
    }
  }
);

// Delete
router.delete('/questions/:id', adminValidator, async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Question deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
});

module.exports = router;
