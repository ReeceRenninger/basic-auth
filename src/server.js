'use strict';

//import resources
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./auth/router');
const notFound = require('./auth/error-handlers/404');
const errorHandler = require('./auth/error-handlers/500');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const { Sequelize, DataTypes } = require('sequelize');

//singleton express for app
const app = express();

//json processor
app.use(express.json());
app.use(cors);
app.use(authRouter);

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen(port, () => console.log('server is running on:', port));

module.exports = {
  app, 
  start,
};