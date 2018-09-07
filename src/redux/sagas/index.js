import { all } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import loginSaga from './loginSaga';


export default function* rootSaga() {
  yield all([
    requestSaga(),
    loginSaga(),
    // watchIncrementAsync()
  ]);
}
