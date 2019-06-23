const express = require('express');
const router = express.Router();
const Instrument = require('../../models/Instrument');

// Get All Instruments Route
router.get('/', async (req,res) => {
    const instruments = await Instrument.find();
    res.send(instruments);
});

// Add new Instrument route
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