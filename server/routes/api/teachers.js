const express = require('express');
const router = express.Router();
const Teacher = require('../../models/Teacher');
const { check } = require('express-validator');
const {
  adminMiddleware,
  authMiddleware,
  formValidationMiddleware
} = require('../../middleware/');

const adminValidator = [authMiddleware, adminMiddleware];

const teacherFormValidator = [
  check('firstname', 'firstname is required !')
    .not()
    .isEmpty(),
  check('lastname', 'lastname is required !')
    .not()
    .isEmpty(),
  check('gender', 'gender is required !')
    .not()
    .isEmpty(),
  check('phone', 'phone is required !')
    .not()
    .isEmpty(),
  check('skills', 'skills is required !')
    .not()
    .isEmpty(),
  formValidationMiddleware
];

// Get all teacher route
router.get('/teachers/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

// Add teacher route
// {firstname,lastname,gender,DoB,address,phone,
// facebook,qualification,skills,language}
router.post(
  '/teachers/',
  [...adminValidator, ...teacherFormValidator],
  async (req, res) => {
    try {
      const newTeacher = new Teacher(req.body).save();
      res.json(newTeacher);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: error.message });
    }
  }
);

// Update
router.put(
  '/teachers/:id',
  [...adminValidator, ...teacherFormValidator],
  async (req, res) => {
    try {
      const Teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body);
      res.json(Teacher);
    } catch (error) {
      res.status(500).json({ errors: 'Server Error!' });
    }
  }
);

router.delete('/teachers/:id', adminValidator, async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Teacher deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: 'Server Error!' });
  }
});
module.exports = router;
