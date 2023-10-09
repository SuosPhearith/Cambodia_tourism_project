const express = require('express');
require('dotenv').config();

const serviceRoute = require('./routes/serviceRoute');

// FIRST MIDDLEWARE
const app = express();
app.use(express.json());

// ROUTE
app.use('/api/v1/service', serviceRoute);

module.exports = app;
