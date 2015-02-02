var creators = require("./seriesServerActionCreators");

module.exports = {
  getInitialSeries: function() {
    creators.recieveInitialSeries([]);
  },
  getAllArticles: function() {
    // Simulate, hit api soon
    setTimeout(function() {
      creators.recieveAllSeries([]);
    }, 30);
  }
};