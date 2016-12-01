import appSagas from '../core/app/sagas';
import contactSagas from '../core/contact/sagas';
import authSagas from '../core/auth/sagas';

export default function* sagas() {
  yield [
    ...appSagas,
    ...contactSagas,
    ...authSagas,
  ];
}