import { combineReducers } from 'redux';

//GET_MAP action
import { GET_MAP } from '../actions/googleMapAction';

const googleMap = (state = [], action) => {
    /// we're are getting the address back
    console.log('reducerstuffherehdsuifhdsiou', action.payload)
    switch(action.type){
        case GET_MAP.SET_DATABASE_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}

export default combineReducers({
    googleMap
})
