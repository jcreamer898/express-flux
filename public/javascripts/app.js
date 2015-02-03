"use strict";

var React = require("react"),
    Marvel = React.createFactory(require("components/marvel/app"));
    
// ArticlesAPI = require("./components/articles/articleApi");

// ArticlesAPI.getInitialArticles();

if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(Marvel({
      initialSeries: window.App.initialSeries
    }), document.getElementById("content"));
  };
}