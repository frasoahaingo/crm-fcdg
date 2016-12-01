import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { persistState } from 'redux-devtools';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import DevTools from '../components/DevTools';

const browserHistory = createBrowserHistory();

const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );

  const store = createStore(reducers, enhancer);

  syncHistoryWithStore(browserHistory, store);
  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
};

const store = configureStore();

export default store;

export {
  browserHistory
};