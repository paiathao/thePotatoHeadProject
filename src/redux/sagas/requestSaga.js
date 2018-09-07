import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendTrackingEmail(action) {
  try {

    yield axios.post('/api/email/tracking', action.payload);
    
    console.log(action.payload);


  } catch (error) {
    console.log(error);
  }
}

function* requestSaga() {
  yield takeLatest('SEND_EMAIL_WITH_TRACKING', sendTrackingEmail);
}

export default requestSaga;
