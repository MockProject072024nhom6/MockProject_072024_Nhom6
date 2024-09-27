const config = require("../configs/dbconfig");
const sql = require("mssql");

// Create New Id
async function generateNewId(pool, tableName, prefix) {
  try {
    const result = await pool
      .request()
      .query(`SELECT COUNT(*) as count FROM ${tableName}`);
    const count = result.recordset[0].count;
    return `${prefix}${count + 1}`;
  } catch (error) {
    throw new Error(
      `Error generating ID for table ${tableName}: ${error.message}`
    );
  }
}
// Update RefreshToken.
async function updateRefreshToken(accountId, refreshToken) {
  try {
    const pool = await sql.connect(config);
    await pool
      .request()
      .input("accountId", sql.VarChar(20), accountId) // Trường account_id
      .input("refreshToken", sql.VarChar(sql.MAX), refreshToken) // Trường refresh_token
      .query(
        "UPDATE Accounts SET refresh_token = @refreshToken WHERE account_id = @accountId"
      );
  } catch (error) {
    console.log({ message: error });
    throw error;
  }
}

module.exports = {
  generateNewId,
  updateRefreshToken,
};
