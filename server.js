'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const notFound = (req, res) => {
  console.log('Hello from not found');
  res.status(404).send('testing');
};

const reqTime = (req, res, next) => {
  console.log('hello from reqTime');
  req.requestTime = new Date();
  next();
};

const logger = (req, res, next) => {
  console.log('Method: ', req.method, 'Path: ', req.path, 'Time: ', req.requestTime);
  next();
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
  console.log(req.number);
  res.send({number: req.number});
});

app.get('/c', reqTime, logger, (req, res, next) => {
  res.status(200).send('Route C');
});

app.get('/d', reqTime, logger, (req, res, next) => {
  res.status(200).send('Route D');
});

app.use('*', notFound);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const errorHandler = (err, req, res, next) => {
  console.log('Made it into the errorHandler');
  res.status(404).send(err);
};

app.use(errorHandler);