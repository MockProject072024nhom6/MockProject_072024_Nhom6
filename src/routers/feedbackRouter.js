const express = require("express");
const { feedbackList } = require("../controllers/feedbackController");

const feedbackRouter = express.Router();
feedbackRouter.use("/feedbacks", feedbackList);

module.exports = feedbackRouter;
