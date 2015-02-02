var React = require("react"),
    // Continent = require("../continents/continents"),
    Series = require("../series/series"),
    // Love = require("../whyilove/love"),
    AppStore = require("./appStore"),
    AppActionCreators = require("./appActionCreators");

function getState() {}

var Marvel = React.createClass({
  getInitialState() {
    var series = this.props.initialSeries;

    AppActionCreators.setInitialSeries(series);

    return {
      series: series
    };
  },
  render() {
    /* jshint ignore:start */
    return(
      <div className="marvel">
        <Series series={this.state.series}/>
      </div>
    );
    /* jshint ignore:end */
  }
});

module.exports = Marvel;


// <Continent name={this.state.countryName} articles={this.state.articles} />
// <Love name={this.state.countryName} content="Because it's awesome" />