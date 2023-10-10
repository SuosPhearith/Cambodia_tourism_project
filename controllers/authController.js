const User = require('../models/userModel');

const signup = async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    res.json({
      status: 'fail',
      error: error,
    });
  }
};

const login = async (req, res) => {
  res.send('This is login');
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.json({
      status: 'fail',
      error: error,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.json({
      status: 'fail',
      error: error,
    });
  }
};
const createUser = async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    res.json({
      status: 'fail',
      error: error,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    res.json({
      status: 'fail',
      error: error,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.json({
      status: 'fail',
      error: error,
    });
  }
};

module.exports = {
  signup,
  login,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
