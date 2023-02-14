const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080

// import routes
const sendEmailRoute = require('./routes/sendemail');

app.use(bodyParser.json());
// app.use(cors());
app.use(cors({ origin: process.env.CLIENT_URL }));

// middlewares
app.use('/api', sendEmailRoute);

app.listen(PORT,() => {
    console.log('Server is running on PORT: ', PORT)
})