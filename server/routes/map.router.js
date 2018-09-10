const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

let address = '1233 Seburn Rd, Apopka Florida 32703'

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('did we get to the map router?', req.body)
        Request.find({}).then((data) => {
            // console.log('did we get the data back', data)
            // res.send(data);
            console.log('fake data', address)
            res.send(address)
        }).catch((err) => {
            console.log('error on Get', err);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403)
    }
 });

module.exports = router;