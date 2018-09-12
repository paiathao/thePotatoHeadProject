const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// let address = '1233 Seburn Rd, Apopka Florida 32703'

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        Request.find().select('address').then(data => {
            console.log('we got real data', data)
            //will need grab more data once database is up and running
            //will need to grab zip/hospital name
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