const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');


const Email = require('email-templates');

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
        from: 'potatoheadprime@gmail.com'
    },
    send: true,
    transport: transporter
});

email.send({
    template: 'trackingEmail',
    message: {
        to: 'paiathao09@gmail.com',
    },
    locals: {
        name: 'Friends',
        tracking: '123',
        note: 'We appreciate you'
    },
})
  .then(console.log)
  .catch(console.error);


/**
 * GET route template
 */
router.get('/', (req, res) => {
    email.send({
        template: 'trackingEmail',
        message: {
            to: 'paiathao09@gmail.com',
        },
        locals: {
            name: 'Friends',
            tracking: '123 tracking',
            note: 'We appreciate you'
        },
    })
      .then(console.log)
      .catch(console.error);

});

/**
 * POST route template
 */
router.post('/', (req, res) => {

    email.send({
        template: 'initialEmail',
        message: {
            // subject: 'testing', // this override the subject.pug
            to: 'paiathao09@gmail.com',
        },
        // these are variable that get insert to the template
        locals: {
            name: 'Friend',
        },
    })
      .then(console.log)
      .catch(console.error);
});

module.exports = router;