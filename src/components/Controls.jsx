var React = require('react');

var Controls = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChanged: React.PropTypes.func.isRequired
    },

    onStatusChanged: function(newStatus) {
        return () => {
            this.props.onStatusChanged(newStatus);
        }
    },

    render: function() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChanged('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChanged('started')}>Start</button>
            } else if (countdownStatus === 'stopped') {
                return <button className="button primary" onClick={this.onStatusChanged('started')}>Restart</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChanged('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;