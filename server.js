'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const router = require('./router.js');
const reqTime = require('./reqTime.js');
const logger = require('./logger.js');
const errorHandler = require('./errorHandler.js');

app.use(logger);
app.use(reqTime);

const notFound = (req, res) => {
  console.log('Path not found, please enter valid path.');
  res.status(404).send('Path not found, please enter valid path.');
};


const squareIt = (req, res, next) => {
  let num = req.params.num;
  num = num * num;
  req.number = num;
  next();
};

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

