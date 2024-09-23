class NotificationSetting {
    constructor(notifications_setting_type, email, browser, send_daily_summary, notification_frequency, daily_digest, account_id){
        this.NotificationSetting = notifications_setting_type
        this.email = email
        this.browser = browser
        this.send_daily_summary = send_daily_summary
        this.notification_frequency = notification_frequency
        this.daily_digest = daily_digest
        this.account_id = account_id
    }
}
module.exports = NotificationSetting