/* jshint node:true */

"use strict";

module.exports = function(req, res, next) {
  req.marvel = {};
  req.marvel.auth = {};
  req.marvel.auth.public = process.env.MARVEL_PUBLIC;
  req.marvel.auth.secret = process.env.MARVEL_SECRET;
  
  next();
};