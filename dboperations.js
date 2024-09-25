const config = require("./dbconfig");
const sql = require("mssql");

// Users
async function getUsers() {
  try {
    const pool = await sql.connect(config);
    const users = await pool.request().query("SELECT * from Accounts");
    return users.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}
async function addUsers(newUser) {
  try {
    const pool = await sql.connect(config);
    const query = `
    INSERT INTO users (first_name, last_name, phone_number, email, current_password, confirm_password, gender, state, city, country)
    VALUES (@firstName, @lastName, @phoneNumber, @email, @password, @gender, @state, @city, @country);
  `;
    const pushUser = await pool
      .request()
      .input("firstName", sql.NVarChar, newUser.firstName)
      .input("lastName", sql.NVarChar, newUser.lastName)
      .input("phoneNumber", sql.NVarChar, newUser.phoneNumber)
      .input("email", sql.NVarChar, newUser.email)
      .input("password", sql.NVarChar, newUser.password) // Mã hóa trước khi lưu
      .input("gender", sql.NVarChar, newUser.gender)
      .input("state", sql.NVarChar, newUser.state)
      .input("city", sql.NVarChar, newUser.city)
      .input("country", sql.NVarChar, newUser.country)
      .query(query);
    return pushUser.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}
// Notifications
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
// Services
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
  getUsers: getUsers,
  getAllNotificationSetting: getAllNotificationSetting,
  getNotificationSettingsByAccountId: getNotificationSettingsByAccountId,
  getAllServices: getAllServices,
  getServiceByName: getServiceByName,
  getFeedBacks: getFeedBacks,
};
