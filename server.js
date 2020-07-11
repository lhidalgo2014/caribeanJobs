const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config/database');
const cors = require('cors');


//routes
const ofertas = require('./routes/ofertas');

const { CONSOLE_APPENDER } = require('karma/lib/constants');

const app = express();

app.use(cors());

//bodyParser middleware
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongoDB connected!'))
    .then(err => console.log(err));

app.use('/ofertas',ofertas);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server run at '+PORT));