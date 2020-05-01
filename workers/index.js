require('../config/mongo');
const mongoose = require('mongoose');
const { receive, send } = require('../lib/queue');
const Notification = mongoose.model('Notification');

const handleIncoming = message => {
  Notification.create({text: message, application: 'MA2'}).then(record => {
    return send('socket', record);
  }).catch(console.error);
};

receive('incoming', handleIncoming).catch(console.error);
