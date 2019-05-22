'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const router = require('./lib/router.js/index.js');
const reqTime = require('./lib/reqTime.js');
const logger = require('./lib/logger.js');
const errorHandler = require('./lib/errorHandler.js');
const squareIt = require('./lib/sqaureIt.js');
const notFound = require('./lib/notFound.js');

app.use(logger);
app.use(reqTime);
app.use(squareIt);
app.use(notFound);

app.get('/a', reqTime, logger, (req, res, next) => {
  res.status(200).send('Route A');
});

app.get('/b/:num', reqTime, logger, squareIt, (req, res, next) => {
  res.send({number: req.number});
});

app.use(router);
app.use('*', notFound);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.use(errorHandler);

