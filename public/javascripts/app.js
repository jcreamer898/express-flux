"use strict";

var React = require("react"),
    Destinations = require("components/series/series");
    
// ArticlesAPI = require("./components/articles/articleApi");

// ArticlesAPI.getInitialArticles();

if (typeof window !== "undefined") {
  window.onload = function() {
    React.renderComponent(Destinations({
      initialArticles: window.App.initialArticles
    }), document.getElementById("content"));
  };
}