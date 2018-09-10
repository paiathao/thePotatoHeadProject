import { all } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';
import verifySaga from './verificationSaga';
import emailSaga from './emailSaga';


export default function* rootSaga() {
  yield all([
    requestSaga(),
    loginSaga(),
    verifySaga(),
    emailSaga()
    // watchIncrementAsync()
  ]);
}
