const express = require('express');
require('dotenv').config();
const morgan = require('morgan');

// IMPORT ROUTE
const serviceRoute = require('./routes/serviceRoute');
const userRoute = require('./routes/userRoute');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// FIRST MIDDLEWARE
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTE
app.use('/api/v1/services', serviceRoute);
app.use('/api/v1/users', userRoute);

app.all('*', (req, res, next) => {
  //   res.status(404).json({
  //     status: 'error',
  //     message: 'Uncatchable route',
  //   });
  next(new AppError(`Can find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
