const express = require('express');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const Request = require('../models/Request');
const verify = require('../modules/verify');

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
    newRequest.hospitalVerified = await verify(newRequest.hospitalName);
    await Request.create(newRequest);
    res.sendStatus(200);

  } catch (err) {

    res.send(err);

  }
});

router.put('/:id', rejectUnauthenticated, async (req, res) => {
  try {

    const { id } = req.params;
    let updatedRequest = await Request.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedRequest);

  } catch (err) {
    res.send(err);
  }
})

module.exports = router;