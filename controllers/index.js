'use strict';

module.exports = async function (request, reply) {
  return reply.view('/views/index', { title: 'タイトル' });
};