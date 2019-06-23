const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');

// Get all question route
router.get('/', async (req,res) => {

    try {
        const questions = await Question.find();
        res.send(questions);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
});

// Add question route
// { provider, phoneNumber, email, message }
router.post('/', async (req,res) => {

    try {
        const newQuestion = await new Question(req.body).save();
        res.send(newQuestion);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
});

module.exports = router;