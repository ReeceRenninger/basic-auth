'use strict';

const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { sequelizeDatabase } = require('.');

// create the sequelize model
const Users = sequelizeDatabase.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});




module.exports = Users;
