import { put,takeEvery } from 'redux-saga/effects';
import { CHECK_VERIFICATION_ACTION } from '../actions/verificationActions'
import {runVerification} from '../requests/verificationRequest';

function* verifyingHospital(action){
    console.log('did we get data to saga?',action)
    try{
        const data =  yield runVerification(action);
          yield put({
              type:CHECK_VERIFICATION_ACTION,
              payload:data
          })
    }catch(error){
        console.log('error',error)
    }
}

function* verificationSaga(){
    yield takeEvery(CHECK_VERIFICATION_ACTION.CHECK ,verifyingHospital )
}

export default verificationSaga;