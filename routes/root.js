'use strict';
const index = require('../controllers/index');
module.exports = async function (fastify, opts) {
  fastify.get('/', index);
};
