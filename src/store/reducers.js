import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from '../core/app/reducer';
import contacts from '../core/contact/reducer';
import auth from '../core/auth/reducer';

const reducers = combineReducers({
  app,
  auth,
  contacts,
  routing
});

export default reducers;