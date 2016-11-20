import { normalize, arrayOf } from 'normalizr';
import schemas from '../schemas';

export const LOAD_CONTACT = 'LOAD_CONTACT';
export const LOAD_CONTACT_SUCCESS = 'LOAD_CONTACT_SUCCESS';

export const loadContact = id => ({
  type: LOAD_CONTACT,
  payload: id
});

export const loadContactSuccess = contact => ({
  type: LOAD_CONTACT_SUCCESS,
  payload: contact
});

export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const LOAD_CONTACTS_SUCCESS = 'LOAD_CONTACTS_SUCCESS';

export const loadContacts = () => ({
  type: LOAD_CONTACTS
});

export const loadContactsSuccess = (contacts) => {
  return ({
    type: LOAD_CONTACTS_SUCCESS,
    payload: normalize(contacts, arrayOf(schemas.contact))
  });
};

export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_FAILED = 'ADD_CONTACT_FAILED';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact
});

export const addContactFailed = error => ({
  type: ADD_CONTACT_FAILED,
  payload: error
});

export const addContactSuccess = contact => ({
  type: ADD_CONTACT_SUCCESS,
  payload: normalize(contact, schemas.contact)
});

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_CONTACT_FAILED = 'UPDATE_CONTACT_FAILED';
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';

export const updateContact = contact => ({
  type: UPDATE_CONTACT,
  payload: contact
});

export const updateContactFailed = error => ({
  type: UPDATE_CONTACT_FAILED,
  payload: error
});

export const updateContactSuccess = contact => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload: normalize(contact, schemas.contact)
});

export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const REMOVE_CONTACT_FAILED = 'REMOVE_CONTACT_FAILED';
export const REMOVE_CONTACT_SUCCESS = 'REMOVE_CONTACT_SUCCESS';

export const removeContact = id => ({
  type: REMOVE_CONTACT,
  payload: id
});

export const removeContactFailed = error => ({
  type: REMOVE_CONTACT_FAILED,
  payload: error
});

export const removeContactSuccess = () => ({
  type: REMOVE_CONTACT_SUCCESS
});
