'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const notFound = (req, res) => {
  console.log('Hello from not found');
  res.status(404).send('testing');
};


app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  res.status(200).send('Route D');
});

app.use('*', notFound);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const errorHandler = (err, req, res, next) => {
  console.log('Made it into the errorHandler');
  res.status(404).send(err);
};

app.use(errorHandler);