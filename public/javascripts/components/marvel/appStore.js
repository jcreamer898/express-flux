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

var AppStore = new Store({
  getInitialSeries: function() {
    return series;
  }
});

AppStore.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType == ActionTypes.LOAD_INITIAL_SERIES) {
    series = action.series;
    AppStore.emitChange();
  }

});

module.exports = AppStore;