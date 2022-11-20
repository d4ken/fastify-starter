'use strict';

const fp = require('fastify-plugin');
const { Liquid } = require('liquidjs');

const engine = new Liquid({
  root: ['views/', 'views/partials/'],
  extname: '.liquid',
});

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/view'), {
    engine: {
      liquid: engine,
    },
  });
});
