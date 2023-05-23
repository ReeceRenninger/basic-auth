'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Users } = require('../models/index');

// middleware discussed in class that can interact with user BEFORE creating the record in the DB, I'm not sure how to use this or where.
// userModel.beforeCreate((user) => {
//   console.log('our user before being added to DB', user);
// });

const basicAuth = async (req, res, next) => {
  let { authorization } = req.headers;
  
  // 1. we isolate the encoded part of the string - Basic UnlhbjpwYXNz
  // we split at the space and grab the index position [1].
  let authString = authorization.split(' ')[1];

  // 2. then we have to decode the authstring
  let decodedAuthString = base64.decode(authString);
  // use console if needed for debugging.
  // console.log('decodedAuthString:', decodedAuthString);

  // 3. Isolate the password FROM the decoded string in step two
  let [username, password] = decodedAuthString.split(':');
  console.log('password:', password);

  let user = await Users.findOne({where: { username }});
  if (user){
    let validUser = await bcrypt.compare(password, user.password);
    if(validUser){
      req.user = user;
      next();
    } else {
      next('Not authorized (incorrect password)');
    }
  } else {
    next('Not authorized (user doesn\'t exist in DB)');
  }
  next();
};

module.exports = basicAuth;