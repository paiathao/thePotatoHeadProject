import { all, takeEvery, call } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';
<<<<<<< HEAD
import verifySaga from './verificationSaga';
import googleMapSaga from './googleMapSaga';
=======
import axios from 'axios';
>>>>>>> c601402ce5e7adbaec3e8c501cc404d6df9c7b77
import emailSaga from './emailSaga';


export default function* rootSaga() {
  yield takeEvery('FORGOT_PASSWORD', forgotPassword)
  yield takeEvery('RESET_PASSWORD', resetPassword)
  yield takeEvery('ADD_REQUEST', addRequest)
  yield all([
    requestSaga(),
    loginSaga(),
<<<<<<< HEAD
    verifySaga(),
    googleMapSaga(),
=======
>>>>>>> c601402ce5e7adbaec3e8c501cc404d6df9c7b77
    emailSaga()
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
    yield call(axios.post, '/api/request/new', action.payload)
  } catch (error) {
    console.log(error);
  }
}

