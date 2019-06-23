const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');

// Get All Course route
router.get('/', async (req,res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }

});

// Add new Course route
// { courseName,description,requirement,fee,
//  startDate,endDate,instrument,imageURI }
router.post('/', async (req,res) => {
    try {
        const newCourse = await new Course(req.body).save();
        res.json(newCourse);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }

});

module.exports = router;