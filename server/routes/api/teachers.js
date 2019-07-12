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

// Update
router.put('/:id',[], async (req,res) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    };

    const id = req.params.id;

    try {
        const Teacher = await Teacher.findByIdAndUpdate(id,req.body);
        res.json(Teacher);
    } catch (error) {
        res.status(500).json({errors: "Server Error!"});
    }
});

router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
        await Teacher.findByIdAndDelete(id);
        res.json({msg: "Teacher deleted Success!"});
    } catch (error) {
        res.status(500).json({errors: "Server Error!"});
    }
});
module.exports = router;