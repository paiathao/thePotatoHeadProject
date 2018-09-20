import { combineReducers } from 'redux';
import auth from './authReducer';
import requests from './requestReducer';
import email from './emailReducer';
import googleMap from './googleMapReducer';
import form from './formReducer';
import login from './loginReducer';

const store = combineReducers({
  auth,
  requests,
  email,
  googleMap,
  form,
  login
});

export default store;
