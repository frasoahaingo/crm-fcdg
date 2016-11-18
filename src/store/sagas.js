import contactSagas from '../core/contact/sagas';

export default function* sagas() {
  yield [
    ...contactSagas,
  ];
}