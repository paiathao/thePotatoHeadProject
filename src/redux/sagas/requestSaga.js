import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  HANDLE_GET_ALL_REQUESTS,
  HANDLE_TOGGLE_REQUEST,
  getAllRequests,
  getAllRequestsSuccess,
  getAllRequestsFail,
  updateRequest,
  updateRequestSuccess,
  updateRequestFail
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

function* toggleRequestSent(request) {
  try {

    const data = {
      ...request,
      markedSent: !request.markedSent
    }

    put(updateRequest());
    let updatedRequest = axios.put(`/api/request/${request._id}`, { data });
    put(updateRequestSuccess(updatedRequest))
     
  } catch (err) {

    put(updateRequestFail(err.message));

  }
}

function* requestSaga() {
  yield takeLatest('SEND_EMAIL_WITH_TRACKING', sendTrackingEmail);
  yield takeLatest(HANDLE_GET_ALL_REQUESTS, handleGetRequests);
  yield takeLatest(HANDLE_TOGGLE_REQUEST, toggleRequestSent);
} 

export default requestSaga;
