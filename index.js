'use strict';

require('dotenv').config();
const { db } = require('./src/auth/models/index');
const { start } = require('./src/server');
const PORT = process.env.PORT || 3002;

db.sync()
  .then(() => {
    console.log('DB connection is running');

    start(PORT);
  })
  .catch(e => console.error(e));