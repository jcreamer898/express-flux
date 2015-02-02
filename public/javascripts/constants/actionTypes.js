"use strict";

var keyMirror = require("react/lib/keyMirror");

var ActionTypes = keyMirror({

  // Route action types
  LOAD_INITIAL_SERIES: null,
  LOAD_ALL_SERIES: null
  
});

module.exports = ActionTypes;