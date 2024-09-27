const serviceModal = require("../models/serviceModal");
const responseData = require("../configs/responseData");

const serviceList = async (req, res) => {
  try {
    const services = await serviceModal.getAllServices();
    responseData(res, "Get services successfully", 200, services[0]);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
};

const serviceByName = async (req, res) => {
  try {
    const serviceByNames = req.params.serviceNames;
    const serviceName = await serviceModal.getServiceByName(serviceByNames);
    if (serviceName[0].length > 0) {
      responseData(res, "Get services successfully", 200, serviceName[0]);
      return;
    }
    responseData(res, "Service not found", 404);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
};

module.exports = { serviceList, serviceByName };
