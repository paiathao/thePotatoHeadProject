import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import verifySaga from './verificationSaga'


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    verifySaga(),
    // watchIncrementAsync()
  ]);
}
