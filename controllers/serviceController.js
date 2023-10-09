const Service = require('../models/serviceModel');

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      status: 'success',
      results: services.length,
      data: {
        services,
      },
    });
  } catch (error) {
    res.status('500').json({
      status: 'error',
      message: 'Some thing error',
    });
  }
};
const getServiceById = (req, res) => {
  res.send('getServiceById');
};
const createService = (req, res) => {
  res.send('createService');
};
const updateService = (req, res) => {
  res.send('updateService');
};
const deleteService = (req, res) => {
  res.send('deleteService');
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
