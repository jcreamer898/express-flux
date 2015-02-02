var Dispatcher = require("../../core/dispatcher");
var ActionTypes = require("../../constants/actionTypes");
var API = require("./seriesApi");

module.exports = {

  /**
   * Set metadata for the current page (title, description, keywords etc.).
   * @param {object} The page object.
   */
  getSeries: function() {
    // Dispatcher.handleViewAction({
    //   actionType: ActionTypes.LOAD_ARTICLES,
    //   articles: articles
    // });

    API.getInitialSeries();
  },

  getAllSeries: function() {
    API.getAllSeries();
  }

};