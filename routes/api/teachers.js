const express = require('express');
const router = express.Router();
const Teacher = require('../../models/Teacher');

// Get all teacher route
router.get('/', async (req,res) => {
    const teachers = await Teacher.find();
    res.status(200).send(teachers);
});

// Add teacher route
router.post('/', async (req,res) => {

    const {firstname,lastname,gender,DoB,address,phoneNumber,
        facebook,qualification,musicSkill,language} = req.body;

    const newTeacher = new Teacher({
        firstname,
        lastname,
        gender,
        DoB,
        address,
        phoneNumber,
        facebook,
        qualification,
        musicSkill,
        language
    }).save();

    res.status(200).send(newTeacher);

});
module.exports = router;