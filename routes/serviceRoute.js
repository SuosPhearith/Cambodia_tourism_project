const express = require('express');
const serviceController = require('../controllers/serviceController');

const app = express.Router();

app
  .route('/')
  .get(serviceController.getAllServices)
  .post(serviceController.createService);
app
  .route('/:id')
  .get(serviceController.getServiceById)
  .patch(serviceController.updateService)
  .delete(serviceController.deleteService);

module.exports = app;
