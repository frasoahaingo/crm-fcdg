import React from 'react';
import { Match } from 'react-router';

import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class Contact extends React.Component {
  render () {

    const { pathname } = this.props;

    return (
      <div>
        <h1>Contact</h1>

        <Match pattern={pathname} exactly component={ContactList} />
        <Match pattern={`${pathname}/add`} component={ContactForm} />
        <Match pattern={`${pathname}/edit/:id`} component={ContactForm} />
        <Match pattern={`${pathname}/show/:id`} component={ContactDetails} />

      </div>
    )
  }
}

export default Contact;