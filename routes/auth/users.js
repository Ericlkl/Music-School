const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const { secretOrKey } = require("../../config/keys");

const authMiddleware = require('../../middleware/auth');
const User = require('../../models/User');

// Register Route
// { firstname, lastname, email, address, 
// facebook, parent, type, avator, password }

router.post('/',[
    check('firstname', 'firstname can not be empty').not().isEmpty(),
    check('lastname', 'lastname can not be empty').not().isEmpty(),
    check('email', 'Please insert valid Email').isEmail(),
    check('password', 'Password must be over 6 or more charactrers long').isLength({ min: 6}),
], async (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({email});

        if (user) return res.status(400).json({ errors: "User already exist !"});

        user = new User(req.body);

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();

        const payload = { user: { id: user.id } };

        jwt.sign(payload,secretOrKey,{ expiresIn: 360000},
            (err, token) => {
            if(err) throw err;

            res.json({token});
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
});

router.get('/', async (req,res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors : "Server Error !"});
    }
});

router.delete('/:id', async (req,res) => {

    const id = req.params.id;

    try {
        const user = await User.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors : "Server Error !"});
    }
});

module.exports = router;