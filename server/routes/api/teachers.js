const express = require('express');
const router = express.Router();
const Teacher = require('../../models/Teacher');
const { check } = require('express-validator');
const {
  adminMiddleware,
  authMiddleware,
  formValidationMiddleware
} = require('../../middleware/');

// Get all teacher route
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

// Add teacher route
// {firstname,lastname,gender,DoB,address,phoneNumber,
// facebook,qualification,musicSkill,language}
router.post(
  '/',
  [
    authMiddleware,
    adminMiddleware,
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
  ],
  async (req, res) => {
    try {
      const newTeacher = new Teacher(req.body).save();
      res.json(newTeacher);
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
    authMiddleware,
    adminMiddleware,
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
  ],
  async (req, res) => {
    try {
      const Teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body);
      res.json(Teacher);
    } catch (error) {
      res.status(500).json({ errors: 'Server Error!' });
    }
  }
);

router.delete('/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  const id = req.params.id;

  try {
    await Teacher.findByIdAndDelete(id);
    res.json({ msg: 'Teacher deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: 'Server Error!' });
  }
});
module.exports = router;
