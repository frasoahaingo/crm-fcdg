import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render () {
    return (
      <header>
        <span>CRM</span> -
        <Link to="/">Home</Link> -
        <Link to="/contacts">Contacts</Link>
      </header>
    );
  }
}

export default Header;
