import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import validateForm from '../services/validateForm';

import {
  HANDLE_FORM_SUBMIT,
  FORM_SUBMIT_START,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL
} from '../actions/formActions';

function* handleFormSubmit(action) {
  try {

    yield put({ type: FORM_SUBMIT_START });

    validateForm(action.payload);

    yield axios.post('/api/request', action.payload);
    yield put({ type: FORM_SUBMIT_SUCCESS });

  } catch (error) {

    yield put({ type: FORM_SUBMIT_FAIL, error: error.message });

  }
}


function* formSaga() {
  yield takeLatest(HANDLE_FORM_SUBMIT, handleFormSubmit);
} 

export default formSaga;