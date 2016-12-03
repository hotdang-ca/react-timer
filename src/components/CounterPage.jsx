var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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

      if (newCount === 0) {
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
            count: 0
          });

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillReceiveProps: function() {

  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentWillMount: function() {
    
  },
  componentDidMount: function() {
    
  },

  render: function() {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChanged={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
})

module.exports = CounterPage;
