const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  text: String,
  application: String,
  date: { type: Date, default: new Date },
  seen: { type: Boolean, default: false }
});

const Notification = mongoose.model('Notification', NotificationSchema);

const create = attrs => new Notification(attrs).save();

module.exports = { create };
