const mongoose = require('mongoose');
const Member = mongoose.model('members');

module.exports = app => {
    app.post('/api/member', async (req,res) => {
        const { firstname, lastname, email } = req.body;
        const newMember = new Member({
            firstname,
            lastname,
            email
        });
        const newObj = await newMember.save();
        res.status(200).send("Sign Up Successfully!");
        console.log(newObj);
    })    
}