'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Users } = require('./models/index');

//Process FORM input and put he data on req.body
router.use(express.urlencoded({ extended: true }));

//!! BRING THE SIGN UP AND SIGN UP ROUTER.POST HERE.
router.post('/signup', async (req, res, next) => {
  console.log('this is the req.body from signup', req.body);
  try {
    console.log('signup route is here');
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await Users.create(req.body);
    res.status(200).send(record);
  } catch (error) {
    // res.status(403).send('Error while creating a user');
    next(error.message);
  }
});


//!! took this comment from demo code 
/** 
  req.headers.authorization is : "Basic al;djf;adjfa"
  To get username and password from this, take the following steps:
    - Turn that string into an array by splitting on ' '
    - Pop off the last value
    - Decode that encoded string so it returns to user:pass
    - Split on ':' to turn it into an array
    - Pull username and password from that array
**/

// router.post('/signin', async (req, res) => {
//   let basicHeaderParts = req.headers.authorization.split(' '); // ['Basic', 'al;djf;adjfa']
//   let encodedString = basicHeaderParts.pop(); // al;djf;adjfa
//   let decodedString = base64.decode(encodedString); // "username: password"
//   let [username, password] = decodedString.split(':'); // username, password

//   //!! took this comment from demo code
//   /*
//     Now that we finally have username and password, let's see if it's valid
//     1. Find the user in the database by username
//     2. Compare the plaintext password we now have against the encrypted password in the db
//        - bcrypt does this by re-encrypting the plaintext password and comparing THAT
//     3. Either we're valid or we throw an error
//   */
//   try {
//     const user = await Users.findOne({ where: { username: password } });
//     const valid = await bcrypt.compare(password, user.password);
//     if (valid) {
//       res.status(200).json(user);
//     } else {
//       throw new Error('INVALID USER');
//     }
//   } catch (error) {
//     res.status(403).send('INVALID LOGIN');
//   }
// });


module.exports = router;