import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getAllContacts } from '../../store/reducers';

class ContactList extends React.Component {
  render () {
    const { contacts } = this.props;

    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>Nom: </strong>{contact.lastName},
              <strong>Prénom: </strong>{contact.firstName},
              <Link to={`/contacts/edit/${contact.id}`}>modifier</Link>
            </li>
          ))}
        </ul>
        <Link to="/contacts/add">ajouter</Link>
      </div>
    )
  }
}

export default connect(
  state => ({
    contacts: getAllContacts(state)
  })
)(ContactList);