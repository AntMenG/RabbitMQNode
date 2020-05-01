const config = require('./config');
const glob = require('glob');
const mongoose = require('mongoose');

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db);
});

const models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
