const express = require('express');
const authController = require('../controllers/authController');

const app = express.Router();
app.route('/signup').post(authController.signup);
app.route('/login').post(authController.login);
app.route('/').get(authController.getAllUsers).post(authController.createUser);
app
  .route('/:id')
  .get(authController.getUserById)
  .patch(authController.updateUser)
  .delete(authController.deleteUser);

module.exports = app;
