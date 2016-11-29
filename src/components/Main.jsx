var React = require('react');
var NavigationBar = require('NavigationBar');

var Main = (props) => {
  return (
    <div>
      <NavigationBar />
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
