const mongoose = require('mongoose');
const Member = mongoose.model('members');

module.exports = app => {
    
    // Signup a new member
    app.post('/api/member', async (req,res) => {
        const { firstname, lastname, email } = req.body;
        
        const newMember = await new Member({
            firstname,
            lastname,
            email
        }).save();

        res.status(200).send(newMember);
    });
    
    // Get all members info
    app.get('/api/member', async (req,res) => {
        const members = await Member.find();
        res.status(200).send(members);
    });
}