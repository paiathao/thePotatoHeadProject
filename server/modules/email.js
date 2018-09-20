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
        from: process.env.CLIENT_USER
    },
    send: true,
    htmlToText: false,
    transport: transporter
});

const emailNoPreview = new Email({
    message: {
        from: process.env.CLIENT_USER
    },
    send: true,
    htmlToText: false,
    preview: false,
    transport: transporter
});

module.exports = {
    email : email,
    emailNoPreview : emailNoPreview
}