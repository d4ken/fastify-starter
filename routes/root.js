'use strict';
const index = require('../controllers/index');

module.exports = async function (fastify, opts) {
  fastify.get('/root', async function (request, reply) {
    return { root: true };
  });
  fastify.get('/', index);
};
