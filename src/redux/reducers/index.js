import { combineReducers } from 'redux';
import auth from './authReducer';
import verify from './VerifyReducer';
import googleMap from './googleMapReducer'
import requests from './requestReducer';
import email from './emailReducer';

const store = combineReducers({
  auth,
  verify,
  googleMap,
  requests,
  email
});

export default store;
