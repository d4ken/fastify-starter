'use strict'

module.exports = async function (fastify, opts) {
  let content = {
    sender: '__server',
    date: new Date().toLocaleString(),
    message: ''
  }

  fastify.get('/',{websocket: true}, async (connection, req) => {
    content.message = `${req.query.username} joined`
    broadcast(content);

    // Leaving user
    connection.socket.on('close', () => {
      content.message = `${req.query.username} left`
      broadcast(content);
    });

    // Broadcast incoming message
    connection.socket.on('message', (message) => {
      message = JSON.parse(message.toString());
      content.sender = req.query.username;
      content.date = message.date;
      content.message = message.message;
      broadcast(content);
    });
  })

  function broadcast(message) {
    for(let client of fastify.websocketServer.clients) {
      client.send(JSON.stringify(message));
    }
  }
}
