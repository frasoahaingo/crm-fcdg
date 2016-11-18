import { combineReducers } from 'redux';
import * as actions from './actions';

const contact = (state, action) => {
  switch(action.type) {
    case actions.ADD_CONTACT:
    case actions.UPDATE_CONTACT:
      return {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch(action.type) {
    case actions.ADD_CONTACT:
    case actions.UPDATE_CONTACT:
      return {
        ...state,
        [action.payload.id]: contact(state[action.payload.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch(action.type) {
    case actions.ADD_CONTACT:
      return [
        ...state,
        action.payload.id
      ];
    default:
      return state;
  }
};

const contacts = combineReducers({
  byId,
  allIds,
});

export default contacts;
