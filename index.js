const dboperations = require('./dboperations')
const NotificationsSetting = require('./NotificationSetting')
const getNotificationSettingsByAccountId = require('./NotificationSetting')

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = express.Router()

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())
app.use('/index', router)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
});

app.get('/', async (req, res) =>{
    dboperations.getAllNotificationSetting().then( result => {
        res.json(result[0])
    })
})
app.get('/:accountId', async (req,res) => {
    const accountId = req.params.accountId
    dboperations.getNotificationSettingsByAccountId(accountId).then( result => {
        res.json(result[0])
    })
})
