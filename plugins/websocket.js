'use strict';

const fp = require('fastify-plugin');
//websocketプラグイン
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/websocket'), {
    clientTracking: true,
  });
});
