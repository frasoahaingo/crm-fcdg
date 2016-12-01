import { eventChannel } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as authActions from '../auth/actions';
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

function* watchSetCurrentUser () {
  while (true) {
    yield take(authActions.SET_CURRENT_USER);
    yield put(push('/'));
  }
}

function* watchLoginAction () {
  while (true) {
    const { payload: { email, password } } = yield take(authActions.LOGIN);
    const user = yield call([api, api.login], email, password);
    yield put(authActions.loginSuccess(user));
    yield put(push('/'));
  }
}

function* watchLogoutAction () {
  while (true) {
    yield take(authActions.LOGOUT);
    yield call([api, api.logout]);
    yield put(push('/'));
  }
}

export default [
  fork(watchLoginAction),
  fork(watchLogoutAction),
  fork(watchSetCurrentUser),
  fork(read),
];