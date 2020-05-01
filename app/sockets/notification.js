const { receive } = require('../../lib/queue');

const configureWebSockets = (httpServer) => {
  const io = require('socket.io')(httpServer);

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
      console.log('message: ' + msg);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    receive('socket', message => {
      console.log('emmit message');
      io.emit('message', JSON.stringify(message));
    })
    .catch(console.error);
  });
};

module.exports = configureWebSockets;
