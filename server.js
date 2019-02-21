const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const { mongoURI } = require('./config/keys')
const app = express();

mongoose.connect(mongoURI, { useNewUrlParser: true});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(passport.initialize());

// Load MongoDb Models
require('./models');
// Plug the routes to the express routers
require('./routes')(app);
require('./config/passport')(passport);

// If we are in production mode
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));