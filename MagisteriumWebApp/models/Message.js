const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: add payment or not

const MessageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    email: {
       type: String,
       max: 40 
    },
    phone: {
        type: String,
        required: true
    },
    meetup: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    subjects: {
        type: String,
        default: true
    }

}, {
    timestamps: true
});

module.exports = Message = mongoose.model('message', MessageSchema);