import React from 'react';
import DevTools from './DevTools';
import Header from './Header';

class App extends React.Component {
  render () {
    return (
      <div>
        <DevTools/>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
