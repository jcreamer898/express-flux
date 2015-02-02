var React = require("react"),
    SeriesItem = require("../series/SeriesItem"),
    SeriesStore = require("./seriesStore"),
    SeriesActionCreators = require("./seriesActionCreators");

// require("./Seriess.scss");

var Series = React.createClass({
  getInitialState() {
    return {
      series: this.props.series
    };
  },
  componentDidMount: function() {
    SeriesStore.addChangeListener(this.seriesLoaded);
  },
  getAll() {
    SeriesActionCreators.getAllSeries();
  },
  render() {
    /* jshint ignore:start */
    return (
      <div className="series">
        <h1 className="series__header--text">Series</h1>
        <p>Here are epic series from Marvel</p>
        <ul className="series-list__container">
          {this.state.series.map(function(result) {
              return <SeriesItem item={result} />;
          })}
        </ul>
        <button onClick={this.getAll}>Get All</button>
      </div>
    )
    /* jshint ignore:end */
  },
  seriesLoaded: function() {
    this.setState({
      series: SeriesStore.get()
    });
  }
});

module.exports = Series;