var Dispatcher = require("../../core/dispatcher");
var ActionTypes = require("../../constants/actionTypes");

module.exports = {

  /**
   * Set metadata for the current page (title, description, keywords etc.).
   * @param {object} The page object.
   */
  setInitialSeries: function(series) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.LOAD_INITIAL_SERIES,
      series: series
    });
  },

  getAllSeries: function() {
    API.getAllseries();
  }

};