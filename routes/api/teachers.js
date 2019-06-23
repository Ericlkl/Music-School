const express = require('express');
const router = express.Router();
const Teacher = require('../../models/Teacher');
const {check, validationResult} = require('express-validator');

// Get all teacher route
router.get('/', async (req,res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
});

// Add teacher route
// {firstname,lastname,gender,DoB,address,phoneNumber,
// facebook,qualification,musicSkill,language} 
router.post('/', async (req,res) => {

    try {
        const newTeacher = new Teacher(req.body).save();
        res.json(newTeacher);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }

});
module.exports = router;