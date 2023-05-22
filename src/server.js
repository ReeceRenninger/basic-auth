'use strict';

//import resources
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

//singleton express for app
const app = express();

//json processor
app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL);