'use strict';

const express = require('express');
const router = express.Router();
const reqTime = require('./reqTime.js');
const logger = require('./logger.js');
const nextError = require('./nextError.js');


router.get('/c', reqTime, logger, (req, res, next) => {
  res.status(200).send('Route C');
});

router.get('/d', reqTime, logger, nextError, (req, res, next) => {
  res.status(200).send('Route D');
});


module.exports = router;