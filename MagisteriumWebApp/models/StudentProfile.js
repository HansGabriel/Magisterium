const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: add payment or not

const StudentProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
       type: String,
       max: 40 
    },
    bio: {
        type: String,
        max: 300
    },
    grade: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    }
});

StudentProfileSchema.index({
    name: 'text',
    description: 'text'
}, {
    weights: {
        user: 5,
        bio: 1
    }
});

module.exports = StudentProfile = mongoose.model('student-profile', StudentProfileSchema);