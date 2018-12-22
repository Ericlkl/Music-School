const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { mongoURI } = require('./config/keys')
const app = express();

mongoose.connect(mongoURI, { useNewUrlParser: true});

app.use(bodyParser.json());

// Create member model
require('./models/Member');
require('./routes/index')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);