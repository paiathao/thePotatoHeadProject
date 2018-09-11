import { all, takeEvery, call } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';
import verifySaga from './verificationSaga'
import axios from 'axios';


export default function* rootSaga() {
  yield takeEvery('FORGOT_PASSWORD', forgotPassword)
  yield takeEvery('RESET_PASSWORD', resetPassword)
  yield all([
    requestSaga(),
    loginSaga(),
    verifySaga(),
    // watchIncrementAsync()
  ]);
}

function* forgotPassword(action) {
  try {
    yield call(axios.get, '/api/email/reset')

  } catch (error) {
    console.log(error);
  }
}

function* resetPassword(action) {
  try {
    yield call(axios.put, `/api/email/reset/${action.token}`,
      {
        password: action.payload,
        token: action.token
      }
    )


  } catch (error) {
    console.log(error);
  }
}

