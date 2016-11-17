import { combineReducers } from 'redux';
import contacts, * as fromContacts from './contacts';

// Main reducer
const reducers = combineReducers({
  contacts
});

export default reducers;

// Main selectors
export const getAllContacts = (state) =>
  fromContacts.getAllContacts(state.contacts);

export const getContactById = (contactId, state) =>
  fromContacts.getContactById(contactId, state.contacts);