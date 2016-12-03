var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var CounterPage = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },

  handleSetCountdown: function(newCount) {
    this.setState({
      count: newCount,
      countdownStatus: 'started'
    });
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

    }, 1000);
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
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
