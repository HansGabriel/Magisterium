const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

// Load Notification model
const Notification = require('../../models/Notification');

// @route   POST api/message
// @desc    Message Tutor
// @access  Private
router.post('/createNotification', passport.authenticate('jwt', { session: false}), (req, res) => {
    
    res.send(req.body.message)
});


module.exports = router;