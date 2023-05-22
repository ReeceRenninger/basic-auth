'use strict';

const { Sequelize, DataTypes } = require('sequelize');


const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory': process.env.DATABASE_URL;

// database singleton, creates the connection
const sequelizeDatabase = new Sequelize(DATABASE_URL);


module.exports = {
  sequelizeDatabase,
};