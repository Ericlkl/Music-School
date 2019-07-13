const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');

const { check } = require('express-validator');

const {
  authMiddleware,
  adminMiddleware,
  formValidationMiddleware
} = require('../../middleware/');

// Get All Course route
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error !' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById({ _id: req.params.id });

    if (!course) return res.status(400).json({ errors: 'Course not found !' });

    res.json(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: 'Server Error!' });
  }
});

// Add new Course route
// { name,desc,require,price,
//  startDate,endDate,instrument,img }
router.post(
  '/',
  [
    authMiddleware,
    adminMiddleware,
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
  ],
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
  '/:id',
  [
    authMiddleware,
    adminMiddleware,
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
  ],
  async (req, res) => {
    const id = req.params.id;
    try {
      const course = await Course.findByIdAndUpdate(id, req.body);
      res.json(course);
    } catch (error) {
      res.status(500).json({ errors: 'Server Error!' });
    }
  }
);

router.delete('/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  const id = req.params.id;
  try {
    await Course.findByIdAndDelete(id);
    res.json({ msg: 'Courses deleted Success!' });
  } catch (error) {
    res.status(500).json({ errors: 'Server Error!' });
  }
});

module.exports = router;
