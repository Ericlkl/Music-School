const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const {check, validationResult} = require('express-validator');

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
router.post('/',[
    check('provider', 'Please Insert Provider name').not().isEmpty(),
    check('email', 'Please Insert email').isEmail(), 
    check('message', 'Please Insert Message').not().isEmpty(),
] ,async (req,res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    };

    try {
        const newQuestion = await new Question(req.body).save();
        res.send(newQuestion);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
});

module.exports = router;