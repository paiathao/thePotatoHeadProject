import { combineReducers } from 'redux';
import auth from './authReducer';
import verify from './VerifyReducer';
import googleMap from './mapReducer'

const store = combineReducers({
  auth,
  verify,
  googleMap
});

export default store;
