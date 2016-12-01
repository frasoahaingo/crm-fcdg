import React from 'react';
import { Match } from 'react-router';
import { Link } from 'react-router';

import DevTools from './DevTools';
import Header from './Header';

import Home from './Home';
import Contacts from './contact';
import Login from './auth/Login';
import MatchUnAuthorised from './auth/MatchUnAuthorised';
import About from './about';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <DevTools/>

        <div className="app__header">
          <Header/>
        </div>

        <div className="app__body">
          <Match pattern={'/about'} component={About}/>
          <Match pattern={'/login'} component={Login}/>
          <MatchUnAuthorised pattern={'/'} exactly component={Home}/>
          <MatchUnAuthorised pattern={'/contacts'} component={Contacts}/>
        </div>

        <div className="app__footer">
          <Link to={'/about'}>About</Link>
        </div>
      </div>
    );
  }
}

export default App;
