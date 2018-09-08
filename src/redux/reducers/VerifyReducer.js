import { combineReducers } from 'redux';

///action
import {CHECK_VERIFICATION_ACTION} from '../actions/verificationActions'

const checkHospital = (state = [], action)=>{
    console.log('verifiy',action)
    switch(action){
        case CHECK_VERIFICATION_ACTION.POST:
        return action.payload
    default:
    return state;
    }
}

export default combineReducers({
    checkHospital
});