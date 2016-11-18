import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as contactActions from '../../core/contact/actions';
import ContactFormFields from './ContactFormFields';

class ContactForm extends React.Component {

  handleOnSubmit = (values) => {
    const { dispatch, contact } = this.props;

    if(!!contact) {
      dispatch(contactActions.updateContact({
        ...contact,
        ...values,
      }));
    } else {
      dispatch(contactActions.addContact(values));
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
    contact: selectors.getContactById(state, props)
  })
)(ContactForm);
