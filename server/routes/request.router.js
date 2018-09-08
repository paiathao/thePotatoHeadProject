const express = require('express');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const Request = require('../models/Request');

router.get('/', rejectUnauthenticated, async (req, res) => {
  try {

    let requests = await Request.find();
    res.send(requests);

  } catch (err) {

    res.send(err);

  }
});

router.post('/', rejectUnauthenticated, async (req, res) => {
  try {

    const newRequest = req.body;
    await Request.create(newRequest);
    res.sendStatus(200);

  } catch (err) {

    res.send(err);

  }
})

module.exports = router;