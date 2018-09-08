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

function* sendTrackingEmail(action) {
  try {

    yield axios.post('/api/email/tracking', action.payload);


  } catch (error) {
    console.log(error);
  }
}

function* requestSaga() {
  yield takeLatest('SEND_EMAIL_WITH_TRACKING', sendTrackingEmail);
  yield takeLatest(HANDLE_GET_ALL_REQUESTS, handleGetRequests);
}

export default requestSaga;
