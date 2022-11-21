'use strict';

const path = require('path');
const fp = require('fastify-plugin');
//websocketプラグイン
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/static'), {
    root: path.join(process.cwd(), 'public'),
  })
});
