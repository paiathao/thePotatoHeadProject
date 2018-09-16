import { all, takeEvery, call } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';
import axios from 'axios';
import emailSaga from './emailSaga';
import googleMapSaga from './googleMapSaga'

//action
import { GET_MAP } from '../actions/googleMapAction'
import { put } from 'redux-saga/effects';


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
    console.log('testing the addRequest in index.js', action)
    yield call(axios.post, '/api/request/', action.payload)
    yield put({
      type:GET_MAP.GET,
      action
    })
  } catch (error) {
    console.log(error);
  }
}

