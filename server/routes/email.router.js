const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const Request = require('../models/Request');

const Person = require('../models/Person');
const encryptLib = require('../modules/encryption');
const async = require('async');
const crypto = require('crypto');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.CLIENT_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.CLIENT_REFRESHTOKEN,
        accessToken: process.env.CLIENT_ACCESSTOKEN,
    },
});

const email = new Email({
    message: {
        from: process.env.CLIENT_USER
    },
    send: true,
    transport: transporter
});

//send reset email
router.get('/reset', (req, res) => {
    async.waterfall([
        function (done) {
            crypto.randomBytes(20, function (err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function (token, done) {
            Person.findOne({ email: process.env.CLIENT_USER }, function (err, user) {
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save(function (err) {
                    done(err, token, user);
                });
            });
        },
        function (token) {
            email.send({
                template: 'resetEmail',
                message: {
                    to: process.env.CLIENT_USER
                },
                locals: {
                    note: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        'http://' + 'localhost:3000/#' + '/reset-password/' + token + '\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                },
            })
                .then(console.log)
                .catch(console.error);
        }
    ], function (err) {
        if (err) return next(err);
        res.redirect('/reset');
    });
});

//reset password
router.put('/reset/:token', (req, res) => {
    console.log('got to reset pw token', req.body)
    const password = encryptLib.encryptPassword(req.body.password);
    async.waterfall([
        function (done) {
            Person.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
                if (!user) {
                    req.flash('error', 'Password reset token is invalid or has expired.');
                    return res.redirect('back');
                }
                user.password = password;
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;

                user.save(function (err) {
                    req.logIn(user, function (err) {
                        done(err, user);
                    });
                });
            });
        },
        function () {
            email.send({
                template: 'resetSuccessEmail',
                message: {
                    to: process.env.CLIENT_USER
                }
            })
                .then(console.log)
                .catch(console.error);
        }
    ], function (err) {
        res.redirect('/');
    });
});


router.put('/', (req, res) => {

    if (req.isAuthenticated) {
        console.log('Got to PUT');
        //send email with tracking
        email.send({
            template: 'trackingEmail',
            message: {
                to: req.body.nominatorEmail
            },
            locals: {
                name: req.body.nominatorName,
                tracking: req.body.tracking,
                note: req.body.note
            },
        })
            .then(console.log)
            .catch(console.error);

        // update Database
        Request.findByIdAndUpdate({
            _id: req.body._id
        }, {
                $set: {
                    tracking: req.body.tracking,
                    note: req.body.note
                }
            }).then(function (response) {
                res.sendStatus(200);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }

});

router.post('/', (req, res) => {
    console.log('here is req.body', req.body);

    //send automate email sent when successfully posting
    email.send({
        template: 'initialEmail',
        message: {
            to: req.body.nominatorEmail,
        },
        // these are variable that get insert to the template
        locals: {
            name: req.body.nominatorName,
        },
    })
        .then(console.log)
        .catch(console.error);

    //save to mongodb
    let newRequest = new Request(req.body);
    newRequest.save().then((data) => {
        console.log(data);
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })
});

module.exports = router;