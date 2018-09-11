import { combineReducers } from 'redux';
import auth from './authReducer';
import verify from './VerifyReducer';
import requests from './requestReducer';
import email from './emailReducer';

const store = combineReducers({
  auth,
  verify,
  requests,
  email
});

export default store;
