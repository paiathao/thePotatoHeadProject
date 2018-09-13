const express = require('express');
const router = express.Router();
const Request = require('../models/Request');


router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        Request.find().select('address').then(data => {
            console.log('we got real data', data)
            res.send(data);
        }).catch((err) => {
            console.log('error on Get', err);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403)
    }
 });

module.exports = router;