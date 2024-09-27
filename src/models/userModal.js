const config = require("../configs/dbconfig");
const sql = require("mssql");
const dboperations = require("../models/dboperations");

async function checkUserByEmail(email) {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("email", sql.VarChar(255), email)
      .query("SELECT * FROM Accounts WHERE email = @email");
    return result.recordset.length > 0 ? result.recordset[0] : null; // Trả về đối tượng người dùng nếu tìm thấy
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
    return result.recordset.length > 0 ? result.recordset[0] : null; // Trả về đối tượng người dùng nếu tìm thấy
  } catch (error) {
    console.log({ message: error });
  }
}
async function addUser(newUser) {
  try {
    const pool = await sql.connect(config);

    // Query để thêm địa chỉ vào bảng Addresses
    const queryAddresses = `
        INSERT INTO Addresses (address_id, stage, city, country, address_line_1, address_line_2)
        VALUES (@addressId, @stage, @city, @country, '', '');
      `;
    // Query để thêm user vào bảng Accounts
    const queryAccounts = `
        INSERT INTO Accounts (account_id, first_name, last_name, phone_number, email, current_password, confirm_password, account_role, gender, address_id, customer_id)
        VALUES (@accountId, @firstName, @lastName, @phoneNumber, @email, @currentPassword, @confirmPassword, @accountRole, @gender, @addressId, @customerId);
      `;

    // Tạo các ID mới
    const addressId = await dboperations.generateNewId(
      pool,
      "Addresses",
      "ADD"
    );
    const accountId = await dboperations.generateNewId(pool, "Accounts", "ACC");
    const customerId = await dboperations.generateNewId(
      pool,
      "Customers",
      "CUS"
    );

    // Chèn địa chỉ vào bảng Addresses
    await pool
      .request()
      .input("addressId", sql.VarChar(20), addressId)
      .input("stage", sql.VarChar(60), newUser.stage)
      .input("city", sql.VarChar(100), newUser.city)
      .input("country", sql.VarChar(60), newUser.country)
      .query(queryAddresses);

    /// Kiểm tra xem customer_id có tồn tại trong bảng Customers không
    const checkCustomer = await pool
      .request()
      .input("customerId", sql.VarChar(20), customerId)
      .query("SELECT * FROM Customers WHERE customer_id = @customerId");

    // Nếu customer_id chưa tồn tại, thêm vào bảng Customers
    if (checkCustomer.recordset.length === 0) {
      await pool
        .request()
        .input("customerId", sql.VarChar(20), customerId)
        .input("request_contract_date", sql.DateTime, new Date()) // Thêm giá trị cho @request_contract_date
        .query(
          "INSERT INTO Customers (customer_id, request_contract_date) VALUES (@customerId, @request_contract_date)"
        );
    }

    // Chèn user vào bảng Accounts
    const pushUser = await pool
      .request()
      .input("accountId", sql.VarChar(20), accountId)
      .input("firstName", sql.VarChar(10), newUser.firstName)
      .input("lastName", sql.VarChar(30), newUser.lastName)
      .input("phoneNumber", sql.VarChar(20), newUser.phoneNumber)
      .input("email", sql.VarChar(255), newUser.email)
      .input("currentPassword", sql.VarChar(100), newUser.currentPassword) // Mã hóa trước khi lưu
      .input("confirmPassword", sql.VarChar(100), newUser.confirmPassword)
      .input("accountRole", sql.VarChar(20), newUser.role)
      .input("gender", sql.VarChar(10), newUser.gender)
      .input("addressId", sql.VarChar(20), addressId)
      .input("customerId", sql.VarChar(20), customerId)
      .query(queryAccounts);

    return pushUser.recordsets;
  } catch (error) {
    console.log({ message: error });
    throw error;
  }
}

module.exports = { checkUserByEmail, checkUserByPhone, addUser };
