'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const basicAuth = require('./middleware/basic');
const { Users } = require('./models/index');

//Process FORM input and put he data on req.body
//this will be useful in the future to process form input and add to req.body
router.use(express.urlencoded({ extended: true }));

router.post('/signup', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log('signup route is here');
    const encryptedPassword = await bcrypt.hash(req.body.password, 5);
    let newUser = await Users.create({
      username,
      password: encryptedPassword,
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(403).send('Error while creating a user');
  }
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