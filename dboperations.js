var config = require('./dbconfig');
const sql = require('mssql');

async function getTrainings() {
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Training");
        return products.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async function getTraining(trainingId) {
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('input_parameter', sql.VarChar, trainingId)
        .query("SELECT * from Training where training_id = @input_parameter");
        return result.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async  function  addTraining(training) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('training_id', sql.VarChar, training.training_id)
      .input('course_name', sql.VarChar, training.course_name)
      .input('start_dates', sql.Date, training.start_dates)
      .input('end_dates', sql.Date, training.end_dates)
      .input('room', sql.VarChar, training.room)
      .input('category', sql.VarChar, training.category)
      .input('course_start_hour', sql.Time, training.course_start_hour)
      .input('forms_of_training', sql.VarChar, training.forms_of_training)
      .input('training_status', sql.VarChar, training.training_status)
      .input('number_of_registrations', sql.Int, training.number_of_registrations)
      .input('is_deleted', sql.Bit, training.is_deleted)
      .execute('InsertTrainings');
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }
  
  async function deleteTraining(trainingId) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('input_parameter', sql.VarChar, trainingId)
            .query("DELETE FROM Training WHERE training_id = @input_parameter");
        return result.rowsAffected;  // Trả về số hàng bị ảnh hưởng bởi truy vấn
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    getTrainings : getTrainings,
    getTraining : getTraining,
    addTraining : addTraining,
    deleteTraining : deleteTraining
}