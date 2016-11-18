import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as selectors from '../../store/selectors';

class ContactDetails extends React.Component {

  render () {
    const { contact } = this.props;
    return (
      <div>
        <strong>Nom: </strong>{contact.lastName}<br/>
        <strong>Prénom: </strong>{contact.firstName}<br/>
        <Link to={`/contacts/edit/${contact.id}`}>éditer</Link>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    contact: selectors.getContactById(state, props)
  })
)(ContactDetails);
