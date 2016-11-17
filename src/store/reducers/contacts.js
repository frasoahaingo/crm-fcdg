import { combineReducers } from 'redux';
import contact from './contact';

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

const getAllContacts = (state) =>
  state.allIds.map(id => state.byId[id]);

const getContactById = (contactId, state) =>
  state.byId[contactId];

export {
  getAllContacts,
  getContactById,
};