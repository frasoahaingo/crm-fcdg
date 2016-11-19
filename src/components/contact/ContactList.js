import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as selectors from '../../store/selectors';
import * as contactActions from '../../core/contact/actions';

class ContactList extends React.Component {

  componentDidMount () {
    this.props.dispatch(contactActions.loadContacts());
  }

  render () {
    const { contacts } = this.props;

    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>Nom: </strong><Link to={`/contacts/show/${contact.id}`}>{contact.lastName}</Link>,
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
    contacts: selectors.getAllContacts(state)
  })
)(ContactList);