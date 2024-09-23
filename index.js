const dboperations = require('./dboperations')
const path = require('path')
const sql = require('mssql')
const NotificationsSetting = require('./NotificationSetting')
const getNotificationSettingsByAccountId = require('./NotificationSetting')
const updateNotificationSettings = require('./NotificationSetting')
const getAllCustomer = require('./NotificationSetting')
const getAllService = require('./NotificationSetting')
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = express.Router()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/index', router)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
});

app.get('/',async (req, res) => {
    try {
        const result = await dboperations.getAllCustomer()
        res.json(result[0])
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
})

app.get('/NotificationSetting', async (req, res) => {
    try {
        const allCustomers = await dboperations.getAllCustomer()

        res.render('NotificationSetting', {
            customers: allCustomers[0],
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/NotificationSetting/:accountId', async (req, res) => {
    try {
        const accountId = req.params.accountId;
        const notificationSettings = await dboperations.getNotificationSettingsByAccountId(accountId);
        res.json(notificationSettings[0]);
    } catch (error) {
        console.error('Error fetching notification settings:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.patch('/Notification_Setting', async (req, res) => {
    try {
        const{notification_id,email, browser, app} = req.body
        await dboperations.updateNotificationSettings(notification_id, email, browser, app)
        console.log('Update succcess')
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
})

app.get('/Services', async(req,res) =>{
    try {
        const services = await dboperations.getAllService()
        res.status(200).json(services[0])
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
})