const express = require("express");
const {
  serviceList,
  serviceByName,
} = require("../controllers/serviceController");

const serviceRouter = express.Router();
serviceRouter.get("/services", serviceList);
serviceRouter.get("/:serviceNames", serviceByName);

module.exports = serviceRouter;
