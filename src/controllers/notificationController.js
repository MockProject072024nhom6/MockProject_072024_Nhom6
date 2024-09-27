const notificationModal = require("../models/notificationModal");
const responseData = require("../configs/responseData");

const notificationSetting = async (req, res) => {
  try {
    const notificationSetting =
      await notificationModal.getAllNotificationSetting();
    responseData(
      res,
      "Get notification successfully",
      200,
      notificationSetting[0]
    );
    return;
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
};
const notificationByAccountId = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const id = await notificationModal.getNotificationSettingsByAccountId(
      accountId
    );
    if (id[0].length > 0) {
      return responseData(res, "Get services successfully", 200, id[0]);
    }
    responseData(res, "Account not found", 404);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
};

module.exports = { notificationSetting, notificationByAccountId };
