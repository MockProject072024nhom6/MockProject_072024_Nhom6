const express = require("express");
const userRouter = require("./userRouter");
const notificationRouter = require("./notificationRouter");
const serviceRouter = require("./serviceRouter");
const feedbackRouter = require("./feedbackRouter");

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/notification", notificationRouter);
rootRouter.use("/service", serviceRouter);
rootRouter.use("/feedback", feedbackRouter);

module.exports = rootRouter;
