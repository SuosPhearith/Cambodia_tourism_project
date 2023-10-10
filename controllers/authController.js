const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const signup = catchAsync(async (req, res, next) => {
  const users = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      users,
    },
  });
});

const login = async (req, res) => {
  res.send('This is login');
};

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});
const getUserById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new AppError('Invalid id', 400));
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
const createUser = catchAsync(async (req, res, next) => {
  const users = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      users,
    },
  });
});
const updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) return next(new AppError('Invalid id', 400));
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
const deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return next(new AppError('Invalid id'), 400);
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

module.exports = {
  signup,
  login,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
