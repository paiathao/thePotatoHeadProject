const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const Request = require('../models/Request');

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
    email.send({
        template: 'resetEmail',
        message: {
            to: process.env.CLIENT_USER
        }
    })
        .then(console.log)
        .catch(console.error);
});

//reset password
router.put('/reset', (req, res) => {

    // update Database
    Request.findByIdAndUpdate({
        _id: req.body._id
    }, {
            $set: {
                password: req.body.password
            }
        }).then(function (response) {
            //send reset email confirmation
            email.send({
                template: 'resetSuccessEmail',
                message: {
                    to: process.env.CLIENT_USER
                }
            })
                .then(console.log)
                .catch(console.error);
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500)
        })
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