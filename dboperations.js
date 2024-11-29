const config = require("./dbconfig");
const sql = require("mssql");

async function getAllNotificationSetting() {
  try {
    const pool = await sql.connect(config);
    const allNotificationSetting = await pool
      .request()
      .query("SELECT * from Notifications_Setting");
    return allNotificationSetting.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}
async function getNotificationSettingsByAccountId(accountId) {
  try {
    const pool = await sql.connect(config);
    const notificationSettingsByAccountId = await pool
      .request()
      .input("accountId", sql.VarChar, accountId)
      .query(
        "SELECT * from Notifications_Setting where account_id = @accountId"
      );
    return notificationSettingsByAccountId.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}

async function getAllServices() {
  try {
    const pool = await sql.connect(config);
    const allService = await pool.request().query("SELECT * FROM Services");
    return allService.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}

async function getServiceByName(serviceNames) {
  try {
    const pool = await sql.connect(config);
    const serviceByName = await pool
      .request()
      .input("serviceNames", sql.VarChar, serviceNames)
      .query("SELECT * FROM Services where service_names = @serviceNames");
    return serviceByName.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}

async function getFeedBacks() {
  try {
    const pool = await sql.connect(config);
    const feedbackList = await pool.request().query("SELECT * FROM Feedbacks");
    return feedbackList.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}

module.exports = {
  getAllNotificationSetting: getAllNotificationSetting,
  getNotificationSettingsByAccountId: getNotificationSettingsByAccountId,
  getAllServices: getAllServices,
  getServiceByName: getServiceByName,
  getFeedBacks: getFeedBacks,
};
