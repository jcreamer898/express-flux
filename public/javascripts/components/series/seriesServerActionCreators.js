var Dispatcher = require("../../core/dispatcher");
var ActionTypes = require("../../constants/actionTypes");

module.exports = {
  recieveInitialSeries: function(series) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LOAD_INITIAL_SERIES,
      series: series
    });
  },
  recieveAllSeries: function(series) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LOAD_ALL_SERIES,
      series: series
    });
  }
};