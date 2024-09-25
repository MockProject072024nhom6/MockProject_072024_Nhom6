const config = require("./dbconfig");
const sql = require("mssql");

// Users
async function checkUserByEmail(email) {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("email", sql.VarChar(255), email)
      .query("SELECT * FROM Accounts WHERE email = @email");
    return result.recordset.length > 0; // Trả về true nếu đã tồn tại
  } catch (error) {
    console.log({ message: error });
  }
}
async function checkUserByPhone(phoneNumber) {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("phoneNumber", sql.VarChar(20), phoneNumber)
      .query("SELECT * FROM Accounts WHERE phone_number = @phoneNumber");
    return result.recordset.length > 0; // Trả về true nếu đã tồn tại
  } catch (error) {
    console.log({ message: error });
  }
}

async function addUser(newUser) {
  try {
    const pool = await sql.connect(config);

    // Query để thêm địa chỉ vào bảng Addresses
    const queryAddresses = `
      INSERT INTO Addresses (address_id, stage, city, country, address_line_1
      , address_line_2)
      VALUES (@addressId, @stage, @city, @country, '', '');
    `;
    // Query để thêm user vào bảng Accounts
    const queryAccounts = `
      INSERT INTO Accounts (account_id, first_name, last_name, phone_number, email, current_password, confirm_password, account_role, gender, address_id, customer_id)
      VALUES (@accountId, @firstName, @lastName, @phoneNumber, @email, @currentPassword, @confirmPassword, @accountRole, @gender, @addressId, @customerId);
    `;
    // Query để thêm user vào bảng Customers
    const queryCustomers = `
      INSERT INTO Customers (customer_id, request_contract_date)
      VALUES (@customerId, '');
    `;

    // Truy vấn số lượng địa chỉ hiện có trong bảng Addresses
    const resultADD = await pool
      .request()
      .query(`SELECT COUNT(*) as count FROM Addresses`);
    const resultACC = await pool
      .request()
      .query(`SELECT COUNT(*) as count FROM Accounts`);
    const resultCUS = await pool
      .request()
      .query(`SELECT COUNT(*) as count FROM Customers`);
    const countADD = resultADD.recordset[0].count;
    const countACC = resultACC.recordset[0].count;
    const countCUS = resultCUS.recordset[0].count;
    // Tạo address_id mới dựa trên số lượng bản ghi hiện tại (ví dụ: ADD1, ADD2, ...)
    const addressId = `ADD${countADD + 1}`;
    const accountId = `ACC${countACC + 1}`;
    const customerId = `CUS${countCUS + 1}`;

    // Chèn địa chỉ vào bảng Addresses
    await pool
      .request()
      .input("addressId", sql.VarChar(20), addressId)
      .input("stage", sql.VarChar(60), newUser.stage)
      .input("city", sql.VarChar(100), newUser.city)
      .input("country", sql.VarChar(60), newUser.country)
      .input("address_line_1", sql.VarChar(sql.MAX), "")
      .input("address_line_2", sql.VarChar(sql.MAX), "")
      .query(queryAddresses);
    // Kiểm tra xem customer_id có tồn tại không
    const checkCustomer = await pool
      .request()
      .input("customerId", sql.VarChar, customerId) // Thay đổi kiểu dữ liệu nếu cần
      .query("SELECT * FROM Customers WHERE customer_id = @customerId");

    // Nếu customer_id không tồn tại, thêm vào bảng Customers
    if (checkCustomer.recordset.length === 0) {
      await pool
        .request()
        .input("customerId", sql.VarChar, customerId)
        // Thêm các thông tin cần thiết khác
        .query("INSERT INTO Customers (customer_id) VALUES (@customerId)");
    }
    // Chèn user vào bảng Accounts, với address_id đã tạo ở trên
    const pushUser = await pool
      .request()
      .input("accountId", sql.VarChar(20), accountId)
      .input("firstName", sql.VarChar(10), newUser.firstName)
      .input("lastName", sql.VarChar(30), newUser.lastName)
      .input("phoneNumber", sql.VarChar(20), newUser.phoneNumber)
      .input("email", sql.VarChar(255), newUser.email)
      .input("currentPassword", sql.VarChar(100), newUser.currentPassword) // Mã hóa trước khi lưu
      .input("confirmPassword", sql.VarChar(100), newUser.confirmPassword) // Confirm password
      .input("accountRole", sql.VarChar(20), newUser.role) // Vai trò của user (Admin, User, etc.)
      .input("gender", sql.VarChar(10), newUser.gender)
      .input("addressId", sql.VarChar(20), addressId) // Liên kết address_id với bảng Addresses
      .input("customerId", sql.VarChar(20), customerId) // Liên kết address_id với bảng Addresses
      .query(queryAccounts);

    // Chèn vào bảng Customers
    await pool
      .request()
      .input("customerId", sql.VarChar(20), customerId)
      .input("request_contract_date", sql.DateTime, new Date())
      .query(queryCustomers);

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
  checkUserByEmail,
  checkUserByPhone,
  addUser,
  getAllNotificationSetting,
  getNotificationSettingsByAccountId,
  getAllServices,
  getServiceByName,
  getFeedBacks,
};
