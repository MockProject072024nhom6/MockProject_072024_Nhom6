var config = require('./dbconfig');
const sql = require('mssql');

async function getTraining() {
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Training");
        return products.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

module.exports ={
    getTraining : getTraining
}