const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const gravatar = require('gravatar');
const User = mongoose.model('users');

router.post('/register', async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    
    const existUser = await User.findOne({email});
    if (existUser){
        return res.status(400).json({
            errors: "User already exist! Please login"
        })
    }

    // Generate avator
    const avator = gravatar.url(email,{
        s: '200',
        r: 'pg', //Rating
        d: 'mm'
    })

    const newUser = new User({
        email, password, firstname , lastname, avator
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
        })
    });

    newUser.save()
        .then( user => res.json(user))
        .catch(err => console.log(err));
})

router.post('/login', (req,res) => {
    res.json({ msg : "Login"});
});

router.get('/current', (req, res) => {
    res.json({ msg: "Current"});
})

module.exports = router;