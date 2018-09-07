const express = require('express');
const router = express.Router();
let axios = require('axios')



router.post('/', (req,res)=>{
    console.log('godzilla',req.body)
    const url=`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.body.data}&types=hospital&key=AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M`
   axios.get(url).then(response => {
    //    res.sendStatus(200);
    console.log(response.data.results);

    res.json(response.data.results);
   })
    // res.sendStatus(200)
})

module.exports = router;