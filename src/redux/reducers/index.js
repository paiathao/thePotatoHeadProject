import { combineReducers } from 'redux';
import auth from './authReducer';
<<<<<<< HEAD
import verify from './VerifyReducer';
import googleMap from './googleMapReducer'
=======
>>>>>>> c601402ce5e7adbaec3e8c501cc404d6df9c7b77
import requests from './requestReducer';
import email from './emailReducer';

const store = combineReducers({
  auth,
<<<<<<< HEAD
  verify,
  googleMap,
=======
>>>>>>> c601402ce5e7adbaec3e8c501cc404d6df9c7b77
  requests,
  email
});

export default store;
