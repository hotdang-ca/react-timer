var React = require('react');
var NavigationBar = require('NavigationBar');

var Main = (props) => {
  return (
    <div>
      <NavigationBar />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
