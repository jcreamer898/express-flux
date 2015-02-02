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
var series = [];
var allLoaded = false;

var SeriesStore = new Store({

  /**
   * Gets metadata associated with the current page.
   * @returns {Page}
   */
  get: function() {
    return series;
  }

});

SeriesStore.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType == ActionTypes.LOAD_INITIAL_SERIES) {
    series = action.series;
    SeriesStore.emitChange();
  }
  else if (action.actionType == ActionTypes.LOAD_ALL_SERIES) {
    if (!allLoaded) {
      series = series.concat(action.series);
      allLoaded = true;
    }
    SeriesStore.emitChange();
  }

});

module.exports = SeriesStore;