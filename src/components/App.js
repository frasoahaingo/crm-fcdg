import React from 'react';
import { connect } from 'react-redux';
import { Match } from 'react-router';

import DevTools from './DevTools';
import Header from './Header';

import Home from './Home';
import Contacts from './contact';
import Login from './auth/Login';
import MatchUnAuthorised from './auth/MatchUnAuthorised';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <DevTools/>

        <div className="app__header">
          <Header/>
        </div>

        <div className="app__body">
          <MatchUnAuthorised pattern={'/'} exactly component={Home}/>
          <MatchUnAuthorised pattern={'/contacts'} component={Contacts}/>
          <Match pattern={'/login'} component={Login}/>
        </div>
      </div>
    );
  }
}

export default connect()(App);
