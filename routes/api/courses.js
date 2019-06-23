const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = mongoose.model('courses');

router.get('/', async (req,res) => {
    const courses = await Course.find();
    res.send(courses);
});

router.post('/', async (req,res) => {
    const {courseName,description,requirement,fee,startDate,endDate,instrument,imageURI} = req.body;
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