const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

// Load validation
const validateMessageInput = require('../../validation/messageValidation');


// Load User model
const Message = require('../../models/Message');

// @route   POST api/message
// @desc    Message Tutor
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false}), (req, res) => {
    const { errors, isValid } = validateMessageInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    
        // Get fields
    const messageFields = {};
    messageFields.senderId = req.user.id; 
    messageFields.receiverId = req.body.receiverId

    if (req.body.email) messageFields.email = req.body.email;
    if (req.body.phone) messageFields.phone = req.body.phone;
    if (req.body.meetup) messageFields.meetup = req.body.meetup;
    if (req.body.time) messageFields.time = req.body.time;
    if (req.body.duration) messageFields.duration = req.body.duration;
    if (req.body.subjects) messageFields.subjects = req.body.subjects;

    new Message(messageFields).save()
        .then(message => res.json({ success: true }));
});


// @route   POST api/message/:userId
// @desc    Post message by user id
// @access  Private
router.post('/:userId/:isTutor', passport.authenticate('jwt', { session: false }), (req, res) => {
    const userId = req.params.userId
    const isTutor = req.params.isTutor
    if (isTutor == "true") {
        Message.aggregate([
            {
                $match: { receiverId: ObjectId(userId) }
            },
            { $lookup:
               {
                 from: 'users',
                 localField: 'senderId',
                 foreignField: '_id',
                 as: 'userdetails'
               }
            },
            {
                "$project": {
                    "userdetails.password": 0,
                }
            },
        ])
            .then(messages => res.json(messages))
    } else {
        console.log(isTutor)
        Message.aggregate([
            {
                $match: { receiverId: ObjectId(userId) }
            },
            { $lookup:
               {
                 from: 'users',
                 localField: 'senderId',
                 foreignField: '_id',
                 as: 'userdetails'
               }
            },
            { $lookup:
               {
                 from: 'profiles',
                 localField: 'senderId',
                 foreignField: 'user',
                 as: 'profiledetails'
               }
            },
        ])
            .then(messages => res.json(messages))
    }
  });

router.post('/declineMessage', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        console.log(req.body.message)
    }
    catch (err) {
        console.error(err);

    }
});

router.post('/acceptMessage', passport.authenticate('jwt', { session: false }), (req, res) => {
    try {
        const message = req.body.message
        const messageFields = {};
        messageFields.senderId = message.receiverId; 
        messageFields.receiverId = message.senderId
        messageFields.email = message.email;
        messageFields.phone = message.phone;
        messageFields.meetup = message.meetup;
        messageFields.time = message.time;
        messageFields.duration = message.duration;
        messageFields.subjects = message.subjects;
        console.log(messageFields)
        Message.findOneAndDelete(
            { _id: message._id }
        ).then(() => {
            new Message(messageFields).save()
                .then(messages => res.send(messages));
        })

    }
    catch (err) {
        console.error(err);
    }
});

router.post('/deleteMessage', passport.authenticate('jwt', { session: false }), (req, res) => {
    const id = req.body.id
    console.log(req.body)
    Message.findOneAndDelete(
        { _id: id }
    ).then(() => res.json({ success: true }))
    .catch(err => console.log(err));
});

module.exports = router;