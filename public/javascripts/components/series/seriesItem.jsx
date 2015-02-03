var React = require("react");

var ArticleItem = React.createClass({
  render() {
    /* jshint ignore:start */
    return (
      <li className="series-item">
        <a href={this.props.item.urls[0].url}>
        <img className="series-image" src={this.props.item.thumbnail.path + "." + this.props.item.thumbnail.extension} />
          {this.props.item.title}
        </a>
      </li>
    )
    /* jshint ignore:end */
  }
});

module.exports = ArticleItem;