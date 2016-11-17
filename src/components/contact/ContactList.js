import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getAllContacts } from '../../store/reducers';

class ContactList extends React.Component {
  render () {

    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            Nom: { contact.lastName},
            Prénom: { contact.firstName},
            <Link to={`/contacts/edit/${contact.id}`}>modifier</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  state => ({
    contacts: getAllContacts(state)
  })
)(ContactList);