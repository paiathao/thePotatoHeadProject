import { combineReducers } from 'redux';
import auth from './authReducer';

const store = combineReducers({
  auth
});

export default store;
