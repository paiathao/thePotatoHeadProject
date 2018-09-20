import { all, takeEvery, call } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';
import axios from 'axios';
import emailSaga from './emailSaga';
import googleMapSaga from './googleMapSaga';
import formSaga from './formSaga';


export default function* rootSaga() {
  yield takeEvery('FORGOT_PASSWORD', forgotPassword)
  yield takeEvery('RESET_PASSWORD', resetPassword)
  yield all([
    requestSaga(),
    loginSaga(),
    emailSaga(),
    googleMapSaga(),
    formSaga(),
    // watchIncrementAsync()
  ]);
}

function* forgotPassword(action) {
  console.log('got to forgot')
  try {
    yield call(axios.get, '/api/reset')
  
  } catch (error) {
    throw new Error(error.message);
    
  }
}

function* resetPassword(action) {
  try {
    yield call(axios.put, `/api/reset/${action.token}`,
      {
        password: action.payload,
        token: action.token
      }
    )

  } catch (error) {
    throw new Error(error.message);
  }
}


