const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'rabbitmqnode'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rabbitmqnode-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'rabbitmqnode'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rabbitmqnode-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'rabbitmqnode'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rabbitmqnode-production'
  }
};

module.exports = config[env];
