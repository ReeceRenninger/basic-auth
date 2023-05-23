'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const basicAuth = require('./middleware/basic');
const { Users } = require('./models/index');

router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

router.post('/signin', basicAuth, (req, res) => {
  // all the authorization functionality is in the basic.js
  try {
    res.status(200).send(req.user);
  } catch (error) {
    //console.error(error) // uncomment console log for debugging
    res.status(401).send('Unauthorized user!');
  }

});


module.exports = router;