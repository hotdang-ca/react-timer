var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var CounterPage = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },

  handleSetCountdown: function(newCount) {
    this.setState({
      count: newCount
    });
  },

  render: function() {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
})

module.exports = CounterPage;
