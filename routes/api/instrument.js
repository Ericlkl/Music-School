const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Instrument = mongoose.model('instruments');

router.get('/', async (req,res) => {
    const instruments = await Instrument.find();
    res.send(instruments);
});

router.post('/', async (req,res) => {
    const {name,status,description,price,instock,imageURI} = req.body;
    const newInstrument = await new Instrument({
        name,
        status,
        description,
        price,
        instock,
        imageURI
    }).save();

    res.send(newInstrument);
});

module.exports = router;