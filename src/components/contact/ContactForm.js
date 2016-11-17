import React from 'react';
import { connect } from 'react-redux';
import { getContactById } from '../../store/reducers';
import { addContact, updateContact } from '../../store/actions';
import ContactFormFields from './ContactFormFields';

class ContactForm extends React.Component {

  handleOnSubmit = (values) => {
    const { dispatch, contact } = this.props;

    if(!!contact) {
      dispatch(updateContact({
        ...contact,
        ...values,
      }));
    } else {
      dispatch(addContact(values));
    }
  };

  render () {
    const { contact } = this.props;
    return (
      <ContactFormFields
        contact={contact}
        onSubmit={this.handleOnSubmit}
      />
    );
  }
}

export default connect(
  (state, props) => ({
    contact: getContactById(props.params.contactId, state)
  })
)(ContactForm);
