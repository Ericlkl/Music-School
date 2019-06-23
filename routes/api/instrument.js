const express = require('express');
const router = express.Router();
const Instrument = require('../../models/Instrument');

// Get All Instruments Route
router.get('/', async (req,res) => {
    try {
        const instruments = await Instrument.find();
        res.send(instruments);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
});

// Add new Instrument route
// {name,status,description,price,instock,imageURI}
router.post('/', async (req,res) => {
    try {
        const newInstrument = await new Instrument(req.body).save();
        res.send(newInstrument);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({errors: "Server Error !"});
    }
});

module.exports = router;