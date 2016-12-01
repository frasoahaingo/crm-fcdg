import * as contactSelectors from '../core/contact/selectors';

export const getAllContacts = (state) =>
  contactSelectors.getAllContacts(state.contacts);

export const getContactById = (state, props) =>
  contactSelectors.getContactById(state.contacts, props.params.id);