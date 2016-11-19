import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import DevTools from '../components/DevTools';

const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );

  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
};

export default configureStore;