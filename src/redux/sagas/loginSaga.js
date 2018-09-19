import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
  LOGIN_ACTIONS,
  fetchUser,
  fetchUserSuccess,
  fetchUserFail 
} from '../actions/loginActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callLogin, callLogout } from '../requests/loginRequests';

// worker Saga: will be fired on "LOGIN" actions
function* loginUser(action) {
  try {
    yield put({ type: LOGIN_ACTIONS.CLEAR_LOGIN_ERROR });
    yield put({ type: LOGIN_ACTIONS.REQUEST_START });
    yield callLogin(action.payload);
    yield put({
      type: LOGIN_ACTIONS.AUTHENTICATE_USER,
    });
  } catch (error) {
    yield put({
      type: LOGIN_ACTIONS.LOGIN_REQUEST_DONE,
    });
    if (error.status === 401) {
      yield put({
        type: LOGIN_ACTIONS.LOGIN_FAILED,
        message: error.message,
      });
    } else {
      yield put({
        type: LOGIN_ACTIONS.LOGIN_FAILED_NO_CODE,
        message: error.message,
      });
    }
  }
}

// worker Saga: will be fired on "LOGOUT" actions
function* logoutUser(action) {
  try {
    yield callLogout(action);
    yield put({
      type: USER_ACTIONS.UNSET_USER,
    });
  } catch (error) {
    throw new Error('logout failed');
  }
}

function* getUser(action) {
  try {
    yield put(fetchUser());
    let { data } = yield axios.get('/api/user');

    if (data) {
      yield put(fetchUserSuccess(true));
    } else {
      yield put(fetchUserSuccess(false));
    }

  } catch (err) {
    yield put(fetchUserFail(err));
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN_ACTIONS.LOGIN, loginUser);
  yield takeLatest(LOGIN_ACTIONS.LOGOUT, logoutUser);
  yield takeLatest(LOGIN_ACTIONS.HANDLE_FETCH_USER, getUser);
}

export default loginSaga;
