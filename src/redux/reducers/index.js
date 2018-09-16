import { combineReducers } from 'redux';
import auth from './authReducer';
import requests from './requestReducer';
import email from './emailReducer';
import googleMap from './googleMapReducer';
import form from './formReducer';

const store = combineReducers({
  auth,
  requests,
  email,
  googleMap,
  form
});

export default store;
