"use strict";

var React = require("react"),
    Marvel = React.createFactory(require("components/marvel/app"));
    
var SeriesAPI = require("./components/series/seriesApi");

if (typeof window !== "undefined") {
  SeriesAPI.getInitialSeries(window.App.initialSeries);

  window.onload = function() {
    React.render(Marvel(), document.getElementById("content"));
  };
} 
// else {
//   module.exports = function(initialSeries) {
//     SeriesAPI.getInitialSeries(initialSeries);

//     return Marvel;
//   };
// }