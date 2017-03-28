import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Route, Router, hashHistory, browserHistory, Link } from 'react-router';
import Album from './components/Album';
import Albums from './components/Albums';


ReactDOM.render(
	
  <Router history={hashHistory}>
    <Route path='/' component={ AppContainer }>
    	<Route path='/albums' component={Albums} />
    	<Route path='/albums/:id' component={Album} />
    </Route>
  </Router>,

  document.getElementById('app')
);
