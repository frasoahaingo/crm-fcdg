
import { combineReducers } from 'redux';
import * as actions from './actions';

const byId = (state = {}, action) => {
  switch(action.type) {
    case actions.LOAD_CONTACTS_SUCCESS:
    case actions.ADD_CONTACT_SUCCESS:
    case actions.UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        ...action.payload.entities.contacts,
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  console.log(action.type, action.payload);
  switch(action.type) {
    case actions.LOAD_CONTACTS_SUCCESS:
      return [
        ...state,
        ...action.payload.result,
      ];
    case actions.ADD_CONTACT_SUCCESS:
      return [
        ...state,
        action.payload.result
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
