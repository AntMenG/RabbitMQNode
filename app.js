const express = require('express');
const config = require('./config/config');
const configureWebSockets = require('./app/sockets/notification');
require('./config/mongo');
const app = express();

module.exports = require('./config/express')(app, config);

const http = require('http').createServer(app);
configureWebSockets(http);

http.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});

