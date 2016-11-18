import { combineReducers } from 'redux';
import contacts from '../core/contact/reducer';

const reducers = combineReducers({
  contacts
});

export default reducers;