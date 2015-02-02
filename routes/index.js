"use strict";

require("node-jsx").install({
  harmony: true, 
  extension: ".jsx"
});

var api = require("marvel-api");
var express = require("express");
var router = express.Router();
var React = require("react");
var Marvel = require("../public/javascripts/components/marvel/app");
var debug = require("debug");

/* GET home page. */
router.get("/", function(req, res) {
  var series = require("../server/series");

  var markup = React.renderComponentToString(
    Marvel({
      initialSeries: series
    })
  );
  res.render("index", { 
    title: "Express", 
    markup: markup,
    initialSeries: JSON.stringify(series)
  });
});

router.get("/series", function(req, res) {
  var marvel = api.createClient({
    publicKey: req.marvel.auth.public,
    privateKey: req.marvel.auth.secret
  });

  marvel.series.findAll(req.query.limit || 20, req.query.offset || 0)
    .then(function(json) {
      res.json(json.data);
    })
    .fail(function(e) {
      console.log(e);
    })
    .done();
});

router.get("/articles/more", function(req, res) {
  var moreArticles = [{
    name: "Forest of the Spirit"
  }, {
    name: "Beaches of the Beyond"
  }, {
    name: "A Mauritius taste"
  }];

  res.render(moreArticles);
});

module.exports = router;
