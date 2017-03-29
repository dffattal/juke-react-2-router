import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Route, Router, hashHistory, browserHistory, Link, IndexRedirect } from 'react-router';
import Album from './components/Album';
import Albums from './components/Albums';
import Artist from './components/Artist';
import Artists from './components/Artists';
import ArtistAlbums from './components/ArtistAlbums';
import ArtistSongs from './components/ArtistSongs';

ReactDOM.render(

  <Router history={hashHistory}>
    <Route path='/' component={ AppContainer }>
      <IndexRedirect to='/albums' />
    	<Route path='/albums' component={Albums} />
    	<Route path='/albums/:id' component={Album} />
    	<Route path='/artists' component={Artists} />
      <Route path='/artists/:id' component={Artist} >
        <Route path='albums' component={ArtistAlbums} />
        <Route path='songs' component={ArtistSongs} />
      </Route>
    </Route>
  </Router>,

  document.getElementById('app')
);
