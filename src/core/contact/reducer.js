import { combineReducers } from 'redux';

const contact = (state, action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
    case 'UPDATE_CONTACT':
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
    case 'ADD_CONTACT':
    case 'UPDATE_CONTACT':
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
    case 'ADD_CONTACT':
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
