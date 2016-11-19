import { browserHistory as history } from 'react-router';
import { eventChannel } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
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

function* watchLoadContacts () {
  while (true) {
    yield take(actions.LOAD_CONTACTS);
    yield fork(read);
  }
}

function* watchAddContact () {
  while (true) {
    let { payload } = yield take(actions.ADD_CONTACT);
    const contact = yield fork(addContact, payload);
    console.log(contact);
    yield history.push('/contacts');
  }
}

function* watchUpdateContact () {
  while (true) {
    let { payload } = yield take(actions.UPDATE_CONTACT);
    yield fork(updateContact, payload.id, payload);
    yield history.push('/contacts');
  }
}

const contactSagas = [
  fork(watchLoadContacts),
  fork(watchAddContact),
  fork(watchUpdateContact),
];

export default contactSagas;