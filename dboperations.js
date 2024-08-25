const config = require('./dbconfig')
const sql = require('mssql')

async function getAllNotificationSetting(){
    try {
        const pool = await sql.connect(config)
        const allNotificationSetting = await pool.request().query("SELECT * from Notifications_Setting")
        return allNotificationSetting.recordsets
    } catch (error) {
        console.log({message: error})
    }
}
async function getNotificationSettingsByAccountId(accountId){
    try {
        const pool = await sql.connect(config)
        const notificationSettingsByAccountId = await pool.request()
        .input('accountId', sql.VarChar, accountId)
        .query("SELECT * from Notifications_Setting where account_id = @accountId")
        return notificationSettingsByAccountId.recordsets
    } catch (error) {
        console.log({message: error})
    }
}
module.exports = {
    getAllNotificationSetting: getAllNotificationSetting,
    getNotificationSettingsByAccountId: getNotificationSettingsByAccountId
}
