var React = require('react');

var CountdownForm = React.createClass({
  onSubmitTime: function(e) {
    e.preventDefault();
    var secondsAsString = this.refs.secondsField.value;

    if (secondsAsString.match(/^[0-9]*$/)) {
      this.refs.secondsField.value = '';
      this.props.onSetCountdown(parseInt(secondsAsString, 10));
    }
  },

  render: function() {
      return (
        <div>
          <form ref="form" onSubmit={this.onSubmitTime} className="countdown-form">
            <input type="text" ref="secondsField" placeholder="Number of seconds" />
            <button className="button expanded">Start</button>
          </form>
        </div>
      );
  }
});

module.exports = CountdownForm;
