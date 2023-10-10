const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'The user must have a firstname'],
    minLength: [2, 'firstname is too short'],
    maxLength: [50, 'firstname is too long'],
    trim: true,
    match: [/^[A-Za-z]+$/, 'The firstname allow only letters'],
  },
  lastname: {
    type: String,
    required: [true, 'The user must have a lastname'],
    minLength: [2, 'lastname is too short'],
    maxLength: [50, 'lastname is too long'],
    trim: true,
    match: [/^[A-Za-z]+$/, 'The lastname allow only letters'],
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'guide', 'user'],
    default: 'user',
  },
  phone: {
    type: String,
    default: 'NO phone number provided',
    minLength: [7, 'Phone number is too short'],
    maxLength: [50, 'Phone number is too long'],
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  password: {
    type: String,
    require: true,
    trim: true,
    minLength: [6, 'The password is too short'],
    maxLength: [50, 'The password is too long'],
  },
  confirmPassword: {
    type: String,
    require: true,
    trim: true,
    minLength: [6, 'The confirmPassword is too short'],
    maxLength: [50, 'The confirmPassword is too long'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  photos: [String],
  profile: String,
  favoriteServices: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
