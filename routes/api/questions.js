const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('questions');
    
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

router.get('/', async (req,res) => {
    const questions = await Question.find();
    res.status(200).send(questions);
});

module.exports = router;