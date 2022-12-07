'use strict';

module.exports = async function (request, reply) {
  const todos = ['ぴよこっこー🐥', 'こけこっこー🐔', 'はとぽっぽー🕊']
  return reply.view('/views/index', { title: 'D4ken Tech' , description: 'ようこそ。', todos: todos});
};
