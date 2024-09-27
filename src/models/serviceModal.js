const config = require("../configs/dbconfig");
const sql = require("mssql");

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

module.exports = { getAllServices, getServiceByName };
