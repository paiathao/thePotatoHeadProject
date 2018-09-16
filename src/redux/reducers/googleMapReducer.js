import { combineReducers } from 'redux';

//GET_MAP action
import { GET_MAP } from '../actions/googleMapAction';

const googleMap = (state = [], action) => {
    switch(action.type){
        case GET_MAP.USE_LAT_LNG:
        return action.payload;
        default:
        return state;
    }
}

const storeAddress = (state = [], action)=>{
    switch(action.type){
        case GET_MAP.SET:
        return action.payload;
        default:
        return state;
    }
}

export default combineReducers({
    googleMap,
    storeAddress
})
