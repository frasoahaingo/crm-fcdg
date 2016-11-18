import * as contactSelectors from '../core/contact/selectors';

export const getAllContacts = (state) =>
  contactSelectors.getAllContacts(state.contacts);

export const getContactById = (contactId, state) =>
  contactSelectors.getContactById(contactId, state.contacts);