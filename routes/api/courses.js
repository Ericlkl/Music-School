const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');

// Get All Course route
router.get('/', async (req,res) => {
    const courses = await Course.find();
    res.send(courses);
});

// Add new Course route
router.post('/', async (req,res) => {

    const {courseName,description,requirement,fee,
        startDate,endDate,instrument,imageURI} = req.body;

    const newCourse = await new Course({
        courseName,
        description,
        requirement,
        fee,
        startDate,
        endDate,
        instrument,
        imageURI
    }).save();

    res.status(200).send(newCourse);
});

module.exports = router;