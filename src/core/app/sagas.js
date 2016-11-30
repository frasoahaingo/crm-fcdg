import { eventChannel } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import api from './api';

function subscribe() {
  return eventChannel(emit => api.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}
export default [
  fork(read),
];