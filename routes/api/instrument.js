const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Instrument = mongoose.model('instruments');

router.get('/instrument', async (req,res) => {
    const instruments = await Instrument.find();
    res.send(instruments);
});

router.post('/instrument', async (req,res) => {
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