const express = require('express');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const Request = require('../models/Request');
const verify = require('../modules/verify');
const email = require('../modules/email')

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

router.put('/', (req, res) => {

  if (req.isAuthenticated) {
      console.log('Got to PUT');
      //send email with tracking
      email.send({
          template: 'trackingEmail',
          message: {
              to: req.body.nominatorEmail
          },
          locals: {
              name: req.body.nominatorName,
              tracking: req.body.tracking,
              note: req.body.note
          },
      })
          .then(console.log)
          .catch(console.error);

      // update Database
      Request.findByIdAndUpdate({
          _id: req.body._id
      }, {
              $set: {
                  tracking: req.body.tracking,
                  note: req.body.note
              }
          }).then(function (response) {
              res.sendStatus(200);
          }).catch((err) => {
              console.log(err);
              res.sendStatus(500)
          })
  } else {
      res.sendStatus(403);
  }

});

router.post('/new', (req, res) => {
  console.log('here is req.body', req.body);

  //send automate email sent when successfully posting
  email.send({
      template: 'initialEmail',
      message: {
          to: req.body.nominatorEmail,
      },
      // these are variable that get insert to the template
      locals: {
          name: req.body.nominatorName,
      },
  })
      .then(console.log)
      .catch(console.error);

  //save to mongodb
  let newRequest = new Request(req.body);
  newRequest.save().then((data) => {
      console.log(data);
      res.sendStatus(201);
  }).catch((err) => {
      console.log(err);
      res.sendStatus(500)
  })
});

module.exports = router;