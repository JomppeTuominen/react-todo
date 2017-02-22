import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';


var requireLogin = (nextState, replace, next) => {
  // no-one is logged in so redirect to index
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  // redirect to todos when logged in (from index)
  if(firebase.auth().currentUser) {
    replace('/todos');
  }

  next();
};


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
);
