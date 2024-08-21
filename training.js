class Training{
    constructor(training_id, course_name, start_dates, end_dates, room, category, course_start_hour, forms_of_training, training_status, number_of_registrations, is_deleted){
        this.training_id = training_id;
        this.course_name = course_name;
        this.start_dates = start_dates;
        this.end_dates = end_dates;
        this.room = room;
        this.category = category;
        this.course_start_hour = course_start_hour;
        this.forms_of_training = forms_of_training;
        this.training_status = training_status;
        this.number_of_registrations = number_of_registrations;
        this.is_deleted = is_deleted;
    }
}

module.exports = Training;