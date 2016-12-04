var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var TimerPage = require('TimerPage');
var CounterPage = require('CounterPage');

$(document).foundation();

// app styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={ Main }>
      <Route path='countdown' component={ CounterPage }/>
      <IndexRoute component={ TimerPage } />
    </Route>
  </Router>,
  document.getElementById('app')
);
