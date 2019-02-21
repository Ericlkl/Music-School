const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = mongoose.model('members');
    
// Signup a new member
router.post('/member', async (req,res) => {
    const { firstname, lastname, email } = req.body;
    
    const newMember = await new Member({
        firstname,
        lastname,
        email
    }).save();

    res.status(200).send(newMember);
});

// Get all members info
router.get('/member', async (req,res) => {
    const members = await Member.find();
    res.status(200).send(members);
});