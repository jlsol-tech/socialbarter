const express = require('express');

const router = express.Router();

const test = require('./test.json');

router.get('/', (req, res) => {
  res.send(test);
});

module.exports = router;
