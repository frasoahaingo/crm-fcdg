import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <div>
        <h1>Contact</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Contact;