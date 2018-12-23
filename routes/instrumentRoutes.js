const mongoose = require('mongoose');
const Instrument = mongoose.model('instruments');

module.exports = app => {
    app.get('/api/instrument', async (req,res) => {
        const instruments = await Instrument.find();
        res.send(instruments);
    });

    app.post('/api/instrument', async (req,res) => {
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
}