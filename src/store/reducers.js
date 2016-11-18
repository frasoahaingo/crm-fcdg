import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import contacts from '../core/contact/reducer';

const reducers = combineReducers({
  contacts,
  routing
});

export default reducers;