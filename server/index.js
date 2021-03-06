const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Read Environment variable
require('dotenv').config(path.resolve(__dirname));
const app = express();

// Connect MongoDB Server
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Mongo DB server connected!')
);

app.use(morgan('dev'));
app.use(bodyParser.json());

// Plug the routes to the express routers
require('./routes')(app);

// If we are in production mode
app.use(express.static('../client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
