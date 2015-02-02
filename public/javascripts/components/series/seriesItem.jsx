var React = require("react");

var ArticleItem = React.createClass({
  render() {
    /* jshint ignore:start */
    return (
      <li className="series-item">
        {this.props.title}
      </li>
    )
    /* jshint ignore:end */
  }
});

module.exports = ArticleItem;