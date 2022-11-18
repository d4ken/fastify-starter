'use strict';
const index = require('../controllers/index');
const user = require('../controllers/user');
module.exports = async function (fastify, opts) {
  fastify.get('/', index);
  fastify.get('/user', user);
};
