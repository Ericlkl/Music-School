const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');
const {check, validationResult} = require('express-validator');

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
router.post('/', [
    check('courseName', 'Please Insert Course name').isLength({ min: 4}),
    check('description', 'Please Insert Description').isLength({ min: 4}), 
    check('fee', 'Please Insert Fee').isInt(),
] , async (req,res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    };

    try {
        const newCourse = await new Course(req.body).save();
        res.json(newCourse);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }

});

module.exports = router;