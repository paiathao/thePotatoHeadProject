import { combineReducers } from 'redux';
import auth from './authReducer';
import requests from './requestReducer';
import email from './emailReducer';

const store = combineReducers({
  auth,
  requests,
  email
});

export default store;
