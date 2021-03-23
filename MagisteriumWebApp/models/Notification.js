const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NotificationSchema = new Schema({
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    message: {
       type: String
    }
}, {
    timestamps: true
});

module.exports = Notification = mongoose.model('notification', NotificationSchema);