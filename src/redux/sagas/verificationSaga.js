import { put,takeEvery } from 'redux-saga/effects';
import { CHECK_VERIFICATION_ACTION } from '../actions/verificationActions'
import {runVerification} from '../requests/verificationRequest';

function* verifyingHospital(action){
    console.log('did we get data to saga?',action)
    try{
        const data =  yield runVerification(action);
          yield put({
              type:CHECK_VERIFICATION_ACTION.POST,
              payload:data
          })

          console.log('kitty foo',data);
            let check = 'no';
            for (let i = 0; i < data.length; i ++){
                let objectTypes = data[i].types;
                console.log('first loop ', i);
                for (let j = 0; j < objectTypes.length; j ++){
                    console.log('second loop ', j);
                    if (objectTypes[j] === "hospital") {
                        check = 'yes'
                    }
                }
            }
            console.log('kitty foo',check)
        //   console.log('kitty foo',data)
    }catch(error){
        console.log('error',error)
    }
}

function* verificationSaga(){
    yield takeEvery(CHECK_VERIFICATION_ACTION.CHECK ,verifyingHospital )
}

export default verificationSaga;