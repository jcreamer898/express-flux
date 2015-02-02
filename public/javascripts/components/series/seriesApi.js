var ServerActions = require("./seriesServerActionCreators");

module.exports = {
  getInitialSeries: function() {
    ServerActions.recieveInitialSeries([]);
  },
  getAllSeries: function() {
    // Simulate, hit api soon
    $.ajax({
      url: "/series",
      data: {
        offset: 21
      }
    }).done(function(series) {
      ServerActions.recieveAllSeries(series);
    });
  }
};