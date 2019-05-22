'use strict';

module.exports = (req, res, next) => {
  let num = req.params.num;
  num = num * num;
  req.number = num;
  next();
};