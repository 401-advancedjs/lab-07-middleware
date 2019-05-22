'use strict';

module.exports = (req, res) => {
  console.log('Path not found, please enter valid path.');
  res.status(404).send('Path not found, please enter valid path.');
};