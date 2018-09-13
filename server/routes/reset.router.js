const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
const email = require('../modules/email')

const encryptLib = require('../modules/encryption');
const async = require('async');
const crypto = require('crypto');

//send reset email
router.get('/', (req, res) => {
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
                    to: 'process.env.CLIENT_USER'
                },
                locals: {
                    resetLink:
                        `http://localhost:3000/#/reset-password/${token}`
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
router.put('/:token', (req, res) => {
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

module.exports = router;