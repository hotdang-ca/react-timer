var React = require('react');
var { Link, IndexLink } = require('react-router');

var NavigationBar = () => {
  return (
    <div className="top-bar">

      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer</li>
          <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold' }}>Timer</IndexLink></li>
          <li><Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold' }}>Countdown</Link></li>
        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text attribution">
            Created by <a href="http://github.com/hotdang-ca" target="_blank">James Perih</a>
          </li>
        </ul>
      </div>

    </div>
  );
};

module.exports = NavigationBar;
