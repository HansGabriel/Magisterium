const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateStudentProfileInput(data) {
    let errors = {};

    data.grade = !isEmpty(data.grade) ? data.grade : '';
    data.bio = !isEmpty(data.bio) ? data.bio : '';
    data.school = !isEmpty(data.school) ? data.school : '';

    if (Validator.isEmpty(data.grade)) {
        errors.type = 'Grade Level is required.';
    }

    if (Validator.isEmpty(data.bio)) {
        errors.type = 'Bio field is required.';
    }

    if (Validator.isEmpty(data.school)) {
        errors.type = 'School field is required.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}