'use strict';

// const { DataTypes } = require('sequelize');
// const { sequelizeDatabase } = require('.');

// const bcrypt = require('bcrypt');
// const { DataTypes } = require('sequelize');

// create the sequelize model
const userModel = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
  return Users;
};
// const Users = sequelizeDatabase.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });


module.exports = userModel;
