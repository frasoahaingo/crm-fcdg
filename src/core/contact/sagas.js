import { eventChannel } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actions';
import { contactList } from './api';

function subscribe() {
  return eventChannel(emit => contactList.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  }
  catch (error) {
    yield put(onError(error));
  }
}

const addContact = write.bind(null, contactList, contactList.push, actions.addContactFailed);
const updateContact = write.bind(null, contactList, contactList.update, actions.updateContactFailed);
const removeContact = write.bind(null, contactList, contactList.remove, actions.removeContactFailed);

function* watchLoadContacts () {
  while (true) {
    yield take(actions.LOAD_CONTACTS);
    yield fork(read);
  }
}

function* watchAddContact () {
  while (true) {
    const contactToAdd = yield take(actions.ADD_CONTACT);
    yield fork(addContact, contactToAdd.payload);
    const addedContact = yield take(actions.ADD_CONTACT_SUCCESS);
    yield put(push(`/contacts/show/${addedContact.payload.result}`));
  }
}

function* watchUpdateContact () {
  while (true) {
    let { payload } = yield take(actions.UPDATE_CONTACT);
    yield fork(updateContact, payload.id, payload);
  }
}

function* watchRemoveContact () {
  while (true) {
    let { payload } = yield take(actions.REMOVE_CONTACT);
    yield fork(removeContact, payload);
    yield take(actions.REMOVE_CONTACT_SUCCESS);
    yield put(push(`/contacts`));
  }
}

const contactSagas = [
  fork(watchLoadContacts),
  fork(watchAddContact),
  fork(watchUpdateContact),
  fork(watchRemoveContact),
];

export default contactSagas;