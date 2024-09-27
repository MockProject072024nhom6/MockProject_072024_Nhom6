const feedbackModal = require("../models/feedbackModal");
const responseData = require("../configs/responseData");

const feedbackList = async (req, res) => {
  try {
    const feedbacks = await feedbackModal.getFeedBacks();
    responseData(res, "Get feedbacks successfully", 200, feedbacks[0]);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
};

module.exports = { feedbackList };
