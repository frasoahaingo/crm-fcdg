import { Map } from 'immutable';
import * as actions from './actions';

const reducer = (state = new Map(), { type, payload }) => {
  switch (type) {

    case actions.LOGIN_SUCCESS:
      return state.merge(payload);

    case actions.LOGOUT:
      return state.clear();

    default:
      return state;
  }
};

export default reducer;