const express = require('express');
require('dotenv').config();

// IMPORT ROUTE
const serviceRoute = require('./routes/serviceRoute');
const userRoute = require('./routes/userRoute');

// FIRST MIDDLEWARE
const app = express();
app.use(express.json());

// ROUTE
app.use('/api/v1/services', serviceRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;
