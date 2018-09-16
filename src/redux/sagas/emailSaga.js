import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  HANDLE_SEND_EMAIL,
  sendEmail,
  sendEmailSuccess,
  sendEmailFail
} from '../actions/emailActions'


function* sendTrackingEmail(action) {
  try {

    yield put(sendEmail());
    yield axios.put('/api/request/', action.payload);
    yield put(sendEmailSuccess());


  } catch (error) {
    yield put(sendEmailFail('An error occured'));
  }
}

function* emailSaga() {
  yield takeLatest(HANDLE_SEND_EMAIL, sendTrackingEmail);
}

export default emailSaga;