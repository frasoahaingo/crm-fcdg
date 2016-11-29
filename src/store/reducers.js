import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import contacts from '../core/contact/reducer';
import auth from '../core/auth/reducer';

const reducers = combineReducers({
  auth,
  contacts,
  routing
});

export default reducers;