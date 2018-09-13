import { combineReducers } from 'redux';
import auth from './authReducer';
import requests from './requestReducer';
import email from './emailReducer';
import googleMap from './googleMapReducer'

const store = combineReducers({
  auth,
  requests,
  email,
  googleMap
});

export default store;
