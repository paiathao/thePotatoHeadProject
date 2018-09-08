import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  HANDLE_GET_ALL_REQUESTS,
  getAllRequests,
  getAllRequestsSuccess,
  getAllRequestsFail
} from '../actions/requestActions';

function* handleGetRequests() {
  try {

    yield put(getAllRequests());
    let { data } = yield axios.get('/api/request');
    yield put(getAllRequestsSuccess(data));

  } catch (err) {

    yield put(getAllRequestsFail(err));

  }
}

function* requestSaga() {
  yield takeLatest(HANDLE_GET_ALL_REQUESTS, handleGetRequests);
}

export default requestSaga;
