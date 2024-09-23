const config = require('./dbconfig')
const sql = require('mssql')

async function getAllCustomer(){
    try {
        const pool = await sql.connect(config)
        const allCustomer = await pool.request()
        .query("SELECT * FROM Accounts a JOIN Addresses ad ON a.address_id = ad.address_id ")
        return allCustomer.recordsets
    } catch (error) {
        console.log({message: error})
    }
}

async function getAllNotificationSetting(){
    try {
        const pool = await sql.connect(config)
        const allNotificationSetting = await pool.request().query("SELECT * from Notifications_Setting")
        return allNotificationSetting.recordsets
    } catch (error) {
        console.log({message: error})
    }
}


async function getNotificationSettingsByAccountId(accountId) {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('accountId', sql.VarChar, accountId) // Dùng accountId lấy từ tham số
            .query('SELECT * FROM Notifications_Setting WHERE account_id = @accountId')
        return result.recordsets
    } catch (error) {
        console.error('Error executing query:', error)
        throw error
    }
}


async function updateNotificationSettings(notifications_setting_id, email, browser, app) {
    try {
        const pool = await sql.connect(config);
        const query = `
            UPDATE Notifications_Setting
            SET email = @email, 
                browser = @browser, 
                app = @app
            WHERE notifications_setting_id = @notifications_setting_id;
        `;
        await pool.request()
            .input('notifications_setting_id', sql.VarChar, notifications_setting_id)
            .input('email', sql.Bit, email) 
            .input('browser', sql.Bit, browser)
            .input('app', sql.Bit, app)
            .query(query);
        
        console.log('Notification settings updated successfully');
    } catch (error) {
        console.error('Error updating notification settings:', error);
    }
}

async function getAllService(){
    try {
        const pool = await sql.connect(config)
        const allService = await pool.request().query("SELECT * FROM Services")
        return allService.recordsets
    } catch (error) {
        console.log({message: error})
    }
}

module.exports = {
    getAllNotificationSetting: getAllNotificationSetting,
    getNotificationSettingsByAccountId: getNotificationSettingsByAccountId,
    getAllCustomer: getAllCustomer,
    updateNotificationSettings: updateNotificationSettings,
    getAllService : getAllService
}
