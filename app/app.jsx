var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import firebase, {firebaseRef} from 'app/firebase/';

var TodoApp = require('TodoApp');

var actions = require('actions');
var store  = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

// initialize the app
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
