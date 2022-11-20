'use strict';
const index = require('../controllers/index');
module.exports = async function (fastify, opts) {
  fastify.get('/', index);

  fastify.get('/chat', async function (request, reply) {
    return reply.view('/views/chat');
  })
};
