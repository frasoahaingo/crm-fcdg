import React from 'react';
import { Match } from 'react-router';

import DevTools from './DevTools';
import Header from './Header';

import Home from './Home';
import Contacts from './contact';

class App extends React.Component {
  render () {
    return (
      <div>
        <DevTools/>
        <Header/>

        <Match pattern={'/'} exactly component={Home} />
        <Match pattern={'/contacts'} component={Contacts} />

      </div>
    );
  }
}

export default App;
