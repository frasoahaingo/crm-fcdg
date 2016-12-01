import { combineReducers } from 'redux';
import { List, Record, Map } from 'immutable';
import * as actions from './actions';

const filter = (state = new Record(), action) => state;

const byId = (state = new Map(), action) => {
  switch(action.type) {
    case actions.LOAD_CONTACTS_SUCCESS:
    case actions.ADD_CONTACT_SUCCESS:
    case actions.UPDATE_CONTACT_SUCCESS:
      return state.merge({
        ...action.payload.entities.contacts,
      });
    case actions.REMOVE_CONTACT:
      return state.delete(action.payload);
    default:
      return state;
  }
};

const allIds = (state = new List(), action) => {
  switch(action.type) {
    case actions.LOAD_CONTACTS_SUCCESS:
      return state.unshift(...action.payload.result);
    case actions.ADD_CONTACT_SUCCESS:
      return state.unshift(action.payload.result);
    case actions.REMOVE_CONTACT:
      return state.filter(id => id !== action.payload);
    default:
      return state;
  }
};

const contacts = combineReducers({
  filter,
  byId,
  allIds,
});

export default contacts;
