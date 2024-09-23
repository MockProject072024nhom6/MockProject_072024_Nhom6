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
class Accounts {
    constructor(account_id, first_name, last_name, phone_number, email, current_password,new_password, confirm_password, avatar, account_role, gender, register_time, account_status, staff_id, guard_id, supervisor_id, admin_id, customer_id, manager_id, address_id, organization, account_type, is_deleted){
        this.account_id = account_id
        this.first_name = first_name
        this.last_name = last_name
        this.phone_number = phone_number
        this.email = email
        this.new_password = new_password
        this.confirm_password = confirm_password
        this.avatar = avatar
        this.account_role = account_role
        this.gender = gender
        this.register_time = register_time
        this.account_status = account_status
        this.staff_id = staff_id
        this.guard_id = guard_id
        this.supervisor_id = supervisor_id
        this.admin_id = admin_id
        this.customer_id = customer_id
        this.manager_id = manager_id
        this.organization = organization
        this.account_type = account_type
        this.is_deleted = is_deleted
    }
}
module.exports = {
    NotificationSetting: NotificationSetting,
    Accounts: Accounts
}