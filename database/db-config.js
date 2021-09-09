const environment = process.env.NODE_ENV || 'development';

const knex = require('knex');

const knexConfig = require('../knexfile.js')[environment];

module.exports = knex(knexConfig);