const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');

const { check } = require('express-validator');

const {
  authMiddleware,
  adminMiddleware,
  formValidationMiddleware
} = require('../../middleware/');

// Validator SetUp
const adminValidator = [authMiddleware, adminMiddleware];
const CourseFormValidator = [
  check('name', 'Please Insert Course name').isLength({ min: 4 }),
  check('desc', 'Please Insert Description').isLength({ min: 4 }),
  check('price', 'Please Insert Fee').isInt(),
  check('startDate', 'Please Insert Start Date')
    .not()
    .isEmpty(),
  check('endDate', 'Please Insert End Date')
    .not()
    .isEmpty(),
  check('instrument', 'Please Insert Instrument Name')
    .not()
    .isEmpty(),
  formValidationMiddleware
];

// Get All Course route
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

router.get('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(400).json({ errors: 'Course not found !' });

    res.json(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
});

// Add new Course route
// { name,desc,require,price,
//  startDate,endDate,instrument,img }
router.post(
  '/courses/',
  [...adminValidator, ...CourseFormValidator],
  async (req, res) => {
    try {
      const newCourse = await new Course(req.body).save();
      res.json(newCourse);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: error.message });
    }
  }
);

// Update
router.put(
  '/courses/:id',
  [...adminValidator, ...CourseFormValidator],
  async (req, res) => {
    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body);
      res.json(course);
    } catch (error) {
      res.status(500).json({ errors: error.message });
    }
  }
);

router.delete('/courses/:id', adminValidator, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Courses deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
});

module.exports = router;
