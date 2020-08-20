const express = require('express');

const emojis = require('./emojis');

const test = require('./test');
const users = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/test', test);
router.use('/users', users)

module.exports = router;
