var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var TimerPage = React.createClass({
  getInitialState: function() {
    return {
      countdownStatus: 'paused',
      count: 0
    }
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      console.log("tick...");

      this.setState({
        count: newCount <= (10 * 60) ? newCount : 10 * 60
      });

      if (newCount === (10 * 60) ) {
        this.setState({
          countdownStatus: 'stopped'
        });
        
      }
    }, 1000);
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0,
          });

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  render: function() {
    var { countdownStatus, count } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={countdownStatus} onStatusChanged={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = TimerPage;
