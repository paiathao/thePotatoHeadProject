import { combineReducers } from 'redux';

import { GET_MAP } from '../actions/googleMapAction';


const googleMap = (state = [], action)=>{
    switch(action){
        case GET_MAP.SET_GOOGLE_MARKER:
        return action.payload
    default:
    return state;
    }
}

export default combineReducers({
    googleMap
})