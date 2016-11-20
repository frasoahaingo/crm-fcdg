import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as selectors from '../../store/selectors';
import * as contactActions from '../../core/contact/actions';

class ContactList extends React.Component {

  componentDidMount () {
    if(this.props.contacts.size === 0) {
      this.props.dispatch(contactActions.loadContacts());
    }
  }

  removeContact (id, e) {
    e.preventDefault();
    this.props.dispatch(contactActions.removeContact(id));
  }

  render () {
    const { contacts } = this.props;

    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.get('id')}>
              <strong>Nom: </strong><Link to={`/contacts/show/${contact.get('id')}`}>{contact.get('lastName')}</Link>,
              <strong>Prénom: </strong>{contact.get('firstName')},
              <Link to={`/contacts/edit/${contact.get('id')}`}>modifier</Link> -
              <button onClick={this.removeContact.bind(this, contact.get('id'))}>supprimer</button>
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