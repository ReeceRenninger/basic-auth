'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');
const { app } = require('../server');
const express = require('express');

//Process FORM input and put he data on req.body
app.use(express.urlencoded({ extended: true}));

//create the sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


app.post('/signup', async (req, res) => {
  try {
    
  } catch (error) {
    
  }
});
