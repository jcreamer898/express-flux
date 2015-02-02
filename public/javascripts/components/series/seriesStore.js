"use strict";

var Store = require("../../core/store");
var Dispatcher = require("../../core/dispatcher");
var ActionTypes = require("../../constants/actionTypes");

/**
 * @typedef Page
 * @type {object}
 * @property {string} title
 * @property {string} description
 * @property {string} keywords
 */
var articles = [];
var allLoaded = false;

var SeriesStore = new Store({

  /**
   * Gets metadata associated with the current page.
   * @returns {Page}
   */
  get: function() {
    return articles;
  }

});

SeriesStore.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType == ActionTypes.LOAD_INITIAL_SERIES) {
    articles = action.articles;
    SeriesStore.emitChange();
  }
  else if (action.actionType == ActionTypes.LOAD_ALL_SERIES) {
    if (!allLoaded) {
      articles = articles.concat(action.articles);
      allLoaded = true;
    }
    SeriesStore.emitChange();
  }

});

module.exports = SeriesStore;