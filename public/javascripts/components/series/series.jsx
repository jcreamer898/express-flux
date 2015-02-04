var React = require("react"),
    SeriesItem = require("../series/SeriesItem"),
    SeriesStore = require("./seriesStore"),
    SeriesActionCreators = require("./seriesActionCreators");

// require("./Seriess.scss");

var seriesBeforeSearch;

var Series = React.createClass({
  getInitialState() {
    return {
      series: SeriesStore.get(),
      filter: ""
    };
  },
  componentDidMount: function() {
    SeriesStore.addChangeListener(this.seriesLoaded);
  },
  getAll() {
    SeriesActionCreators.getAllSeries();
  },
  render() {
    var filter = this.state.filter;
    var filtered = this.state.series.filter(function(item) {
      return item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });

    /* jshint ignore:start */
    return (
      <div className="series">
        <h1 className="series__header--text">Series</h1>
        <p>Here are epic series from Marvel</p>
        <input type="text" placeholder="filter" onChange={this.filter} />
        <ul className="series-list__container">
          {filtered.map(function(result) {
              return <SeriesItem item={result} key={result.id} />;
          })}
        </ul>
        <button onClick={this.getAll}>Get All</button>
      </div>
    )
    /* jshint ignore:end */
  },
  filter: function(event) {
    var filter = event.target.value;

    this.setState({ 
      filter: filter
    });
  },
  seriesLoaded: function() {
    this.setState({
      series: SeriesStore.get()
    });
  }
});

module.exports = Series;