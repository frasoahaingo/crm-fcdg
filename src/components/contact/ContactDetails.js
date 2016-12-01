import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as selectors from '../../store/selectors';
import * as contactActions from '../../core/contact/actions';

class ContactDetails extends React.Component {

  componentDidMount () {
    if(!this.props.contact) {
      this.props.dispatch(contactActions.loadContact(this.props.params.id));
    }
  }

  render () {
    const { contact } = this.props;
    return (
      <div>
        <strong>Nom: </strong>{contact.get('lastName')}<br/>
        <strong>Prénom: </strong>{contact.get('firstName')}<br/>
        <strong>Adresse: </strong>{contact.get('address')}<br/>
        <Link to={`/contacts/edit/${contact.get('id')}`}>éditer</Link>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    contact: selectors.getContactById(state, props)
  })
)(ContactDetails);
