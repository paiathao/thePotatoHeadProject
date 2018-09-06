const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    console.log('godzilla',req.body)
    // const url=`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${action.payload.input}&types=hospital&key=AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M`
    // res.send(url)
    res.sendStatus(200)
})

module.exports = router;