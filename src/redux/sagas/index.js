import { all, takeEvery, call } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';
import axios from 'axios';
import emailSaga from './emailSaga';
import googleMapSaga from './googleMapSaga'


export default function* rootSaga() {
  yield takeEvery('FORGOT_PASSWORD', forgotPassword)
  yield takeEvery('RESET_PASSWORD', resetPassword)
  yield takeEvery('ADD_REQUEST', addRequest)
  yield all([
    requestSaga(),
    loginSaga(),
    emailSaga(),
    googleMapSaga()
    // watchIncrementAsync()
  ]);
}

function* forgotPassword(action) {
  try {
    yield call(axios.get, '/api/reset')
  
  } catch (error) {
    console.log(error);
    
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
    console.log(error);
  }
}

function* addRequest(action) {
  try {
    yield call(axios.post, '/api/request/', action.payload)
  } catch (error) {
    console.log(error);
  }
}

