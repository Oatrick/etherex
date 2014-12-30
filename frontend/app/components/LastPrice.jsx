/** @jsx React.DOM */

var React = require("react");
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React);

var utils = require("../js/utils");

var LastPrice = React.createClass({
  mixins: [FluxMixin],

  getInitialState: function () {
    return {
      lastMarket: null,
      lastPrice: null,
      priceChange: 'info'
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.market.lastPrice > this.state.lastPrice)
      this.setState({
        priceChange: 'success'
      });
    else if (nextProps.market.lastPrice < this.state.lastPrice)
      this.setState({
        priceChange: 'danger'
      });

    if (nextProps.market.lastPrice && nextProps.market.name) {
      this.setState({
        lastMarket: nextProps.market.name,
        lastPrice: nextProps.market.lastPrice
      });
    }
  },

  render: function() {
    return (
      <div className="container-fluid navbar">
        <div className="col-md-12">
          <div className={"btn-lg btn-" + this.state.priceChange + " text-overflow text-center"} title={this.state.lastPrice}>
            {this.state.lastPrice ? this.state.lastPrice + " " + this.state.lastMarket + "/ETH" : "N/A"}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LastPrice;
