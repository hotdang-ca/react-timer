var React = require('react');
var Clock = require('Clock');

var CounterPage = React.createClass({
  render: function() {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
})
// var CounterPage = () => {
// }

module.exports = CounterPage;
