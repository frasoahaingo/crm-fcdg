import { fork, take, call } from 'redux-saga/effects';
import * as actions from './actions';

function* watchCreateTask () {
  while (true) {
    let { payload } = yield take(actions.ADD_CONTACT);
    yield call(actions.addContact, payload);
  }
}

function* watchUpdateTask () {
  while (true) {
    let { payload } = yield take(actions.UPDATE_CONTACT);
    console.log('ici')
    yield call(actions.updateContact, payload);
  }
}

const contactSagas = [
  fork(watchCreateTask),
  fork(watchUpdateTask),
];

export default contactSagas;