import { put, takeLatest } from 'redux-saga/effects';
import { USER_ACTIONS } from '../actions/userActions';
import { callUser } from '../requests/userRequests';

/*
  Starts fetchUser on each dispatched `FETCH_USER` action.
  Allows concurrent fetches of user.
*/
// function* userSaga() {
//   yield takeEvery('FETCH_USER', fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_USER" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userSaga() {
  yield takeLatest(USER_ACTIONS.FETCH_USER, fetchUser);
}

export default userSaga;
