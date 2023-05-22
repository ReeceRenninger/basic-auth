'use strict';

require('dotenv').config();
const { sequelizeDatabase } = require('./src/auth/models/index');
const { start } = require('./src/auth/server');
const PORT = process.env.port;

sequelizeDatabase.sync()
  .then(() => {
    console.log('DB connection is running');

    start(PORT);
  })
  .catch(e => console.error(e));