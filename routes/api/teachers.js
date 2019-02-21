const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Teacher = mongoose.model('teachers');


router.post('/teacher', async (req,res) => {
    const {firstname,lastname,gender,DoB,address,phoneNumber,facebook,qualification,musicSkill,language} = req.body;

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

router.get('/teacher', async (req,res) => {
    const teachers = await Teacher.find();
    res.status(200).send(teachers);
});

module.exports = router;