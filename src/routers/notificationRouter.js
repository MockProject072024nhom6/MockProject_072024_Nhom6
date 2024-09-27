const express = require("express");
const {
  notificationSetting,
  notificationByAccountId,
} = require("../controllers/notificationController");

const notificationRouter = express.Router();
notificationRouter.get("/notificationSetting", notificationSetting);
notificationRouter.get("/:accountId", notificationByAccountId);

module.exports = notificationRouter;
