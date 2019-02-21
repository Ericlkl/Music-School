const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');

const User = mongoose.model('users');
const {secretOrKey} = require('../../config/keys')

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

    var usermodel = new User({
        email, password, firstname , lastname, avator
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err
            usermodel.password = hash

            // Must be inside hash function
            usermodel.save()
            .then( user => res.json(user))
            .catch(err => console.log(err));
        })
    });
    
})

router.post('/login', async (req,res) => {
    const {password, email} = req.body;
    const user = await User.findOne({email})
    if(!user) {
        res.status(400).json({ email : "User Not Found!" })
    }
    console.log(user);
    const isPWCorrect = await bcrypt.compare(password, user.password)
    console.log(isPWCorrect)
    if(isPWCorrect){
        const payload = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            avator: user.avator
        }

        // Sign Token 
        jwt.sign(payload, secretOrKey, {
            expiresIn: 3600
        } ,

        (err, token) => {
            res.json({
                success: true,
                token: `Bearer ${token}`
            })
        })
    }
    else
    {
        res.status(400).json({ password : "Incorrect Password !"})
    }
});

router.get('/current', (req, res) => {
    res.json({ msg: "Current"});
})

module.exports = router;