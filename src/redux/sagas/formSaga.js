import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  HANDLE_FORM_SUBMIT,
  FORM_SUBMIT_START,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL
} from '../actions/formActions';

function* handleFormSubmit(action) {
  debugger;
  yield put({ type: FORM_SUBMIT_START });
}


function* formSaga() {
  yield takeLatest(HANDLE_FORM_SUBMIT, handleFormSubmit);
} 

export default formSaga;