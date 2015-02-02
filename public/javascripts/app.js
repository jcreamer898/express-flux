"use strict";

var React = require("react"),
    Marvel = require("components/marvel/app");
    
// ArticlesAPI = require("./components/articles/articleApi");

// ArticlesAPI.getInitialArticles();

if (typeof window !== "undefined") {
  window.onload = function() {
    React.renderComponent(Marvel({
      initialSeries: window.App.initialSeries
    }), document.getElementById("content"));
  };
}