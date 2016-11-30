import { Map } from 'immutable';
import * as actions from './actions';

const reducer = (state = new Map(), { type, payload }) => {
  switch (type) {

    case actions.SET_CONNECTED_STATUS:
      return state.set('isConnected', payload);

    default:
      return state;
  }
};

export default reducer;