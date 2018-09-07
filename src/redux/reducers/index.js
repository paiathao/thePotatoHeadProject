import { combineReducers } from 'redux';
import auth from './authReducer';
import verify from './VerifyReducer'

const store = combineReducers({
  auth,
  verify
});

export default store;
