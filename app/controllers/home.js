const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Notification = mongoose.model('Notification');
const { send } = require('../../lib/queue');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', async (req, res, next) => {
  try {
    const notifications = await Notification.find();
    console.log(notifications);
    res.render('index', {
      title: 'MediaAdmin | Notifications',
      notifications: notifications
    });
  } catch (error) {
    next(error);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({
      status: 'done',
      data: notifications.slice().reverse()
    });
  } catch (error) {
    next(error);
  }
});

router.post('/send', async (req, res, next) => {
  const { text } = req.body;
  try {
    await send('incoming', text);
    res.status(200).json({
      status: 'done',
      message: `Notification: ${ text }`
    });
  } catch (error) {
    next(error);
  }
});
