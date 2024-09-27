const config = require("../configs/dbconfig");
const sql = require("mssql");

async function getFeedBacks() {
  try {
    const pool = await sql.connect(config);
    const feedbackList = await pool.request().query("SELECT * FROM Feedbacks");
    return feedbackList.recordsets;
  } catch (error) {
    console.log({ message: error });
  }
}

module.exports = { getFeedBacks };
