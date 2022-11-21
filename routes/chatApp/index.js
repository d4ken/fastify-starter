'use strict'

module.exports = async function (fastify, opts) {
  let content = {
    sender: '管理人',
    date: `[${new Date().toLocaleString()}]`,
    message: ''
  }

  fastify.get('/',{websocket: true}, async (connection, req) => {
    content.message = `${req.query.username}さんが入室しました。`
    broadcast(content);

    // Leaving user
    connection.socket.on('close', () => {
      content.message = `${req.query.username}さんが退室しました。`
      broadcast(content);
    });

    // Broadcast incoming message
    connection.socket.on('message', (cli_received) => {
      cli_received = JSON.parse(cli_received.toString());
      content.sender = req.query.username;
      content.date = `[${new Date().toLocaleString()}]`;
      content.message = cli_received.message;
      broadcast(content);
    });
  })

  function broadcast(message) {
    for(let client of fastify.websocketServer.clients) {
      client.send(JSON.stringify(message));
    }
  }
}
