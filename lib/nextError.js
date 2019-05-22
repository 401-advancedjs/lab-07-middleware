'use strict';

module.exports = (req, res, next) => {
  next(new Error('Route D Error'));
};