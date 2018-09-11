import { all } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';
import verifySaga from './verificationSaga';
import googleMapSaga from './googleMapSaga';
import emailSaga from './emailSaga';


export default function* rootSaga() {
  yield all([
    requestSaga(),
    loginSaga(),
    verifySaga(),
    googleMapSaga(),
    emailSaga()
    // watchIncrementAsync()
  ]);
}
