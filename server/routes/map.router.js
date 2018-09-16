const express = require('express');
const router = express.Router();
const location = require ('../models/Location')

router.post('/', (req, res) => {
    console.log('did this hit the router?', req.body)
    try{
        location.create(req.body)
    }
    
    catch (err) {

        res.send(err);

    }
})

router.get('/', (req, res)=>{
    if (req.isAuthenticated()) {
        location.find({}).then(data => {
            res.send(data);
        }).catch((err) => {
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403)
    }
 })


module.exports = router;