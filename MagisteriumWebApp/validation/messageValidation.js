const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateMessageInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.meetup = !isEmpty(data.meetup) ? data.meetup : '';
    data.time = !isEmpty(data.time) ? data.time : '';
    data.duration = !isEmpty(data.duration) ? data.duration : '';
    data.subjects = !isEmpty(data.subjects) ? data.subjects : '';

    if (Validator.isEmpty(data.email)) {
        errors.type = 'Email is required.';
    }

    if (Validator.isEmpty(data.phone)) {
        errors.type = 'Phone Number is required.';
    }

    if (Validator.isEmpty(data.meetup)) {
        errors.type = 'Meeting Place is required.';
    }

    if (Validator.isEmpty(data.time)) {
        errors.type = 'Meeting time is required.';
    }

    if (Validator.isEmpty(data.duration)) {
        errors.type = 'Tutoring duration is required.';
    }

    if (Validator.isEmpty(data.subjects)) {
        errors.type = 'Subject is required.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}