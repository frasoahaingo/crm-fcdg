import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import reducers from './reducers';
import DevTools from '../components/DevTools';

const configureStore = () => {

  const defaultState = {
    contacts: {
      byId: {
        c1: {
          id: 'c1', firstName: 'Fran', lastName: 'Rako'
        },
        c2: {
          id: 'c2', firstName: 'Mic', lastName: 'Raso'
        }
      },
      allIds: ['c1', 'c2'],
    }
  };

  const enhancer = compose( DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );

  const store = createStore(reducers, defaultState, enhancer);

  return store;
};

export default configureStore;