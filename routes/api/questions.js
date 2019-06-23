const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');

// Get all question route
router.get('/', async (req,res) => {
    const questions = await Question.find();
    res.status(200).send(questions);
});

// Add question route
router.post('/', async (req,res) => {
    const { provider, phoneNumber, email, message } = req.body;
    
    const newQuestion = await new Question({
        provider,
        phoneNumber,
        email,
        message
    }).save();

    res.status(200).send(newQuestion);
});

module.exports = router;