import React from 'react';
import { Link } from 'react-router';

class Contact extends React.Component {
  render () {
    return (
      <div>
        <h1>Contact <Link to="/contacts/add">ajouter</Link></h1>
        {this.props.children}
      </div>
    )
  }
}

export default Contact;