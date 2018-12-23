const mongoose = require('mongoose');
const Question = mongoose.model('questions');

module.exports = app => {
    
    app.post('/api/question', async (req,res) => {
        const { provider, phoneNumber, email, message } = req.body;
        
        const newQuestion = await new Question({
            provider,
            phoneNumber,
            email,
            message
        }).save();

        res.status(200).send(newQuestion);
    });
    
    app.get('/api/question', async (req,res) => {
        const questions = await Question.find();
        res.status(200).send(questions);
    });
}