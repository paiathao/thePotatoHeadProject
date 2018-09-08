import { combineReducers } from 'redux';
import auth from './authReducer';
import verify from './VerifyReducer';
import requests from './requestReducer';

const store = combineReducers({
  auth,
  verify,
  requests
});

export default store;
