'use strict';

module.exports = async function (request, reply) {
  return reply.view('/views/user', { title: 'User' });
};