import { put, takeEvery } from 'redux-saga/effects';
import { GET_MAP } from '../actions/googleMapAction'
import { runGetAddress,runGetGeocode,runGoogleMap  } from '../requests/googleMapRequest'

//Get data from database
function* getAddress() {
    try {
        console.log('did we hit the googleMapsaga')
        let mapAddress = yield runGetAddress()
        yield put({
            type:GET_MAP.RUN_GEO,
            payload:mapAddress
        })

    } catch (error) {
        console.log(error);
    };
}

//take info from database and run to get geocode
function* runGeocode(mapAddress) {
    try {
     let location =  yield runGetGeocode(mapAddress)
        const body = {
           longitude: location[0].geometry.location.lng,
           latitude: location[0].geometry.location.lat,
        }
        console.log('what is in the body?',body)
        // yield runGoogleMap(body);
        yield put({
            type:GET_MAP.SET_GOOGLE_MARKER,
            payload: body,
        })
        console.log('what is the payload',body)
    }catch(error){
        console.log(error)
    }
}


//Need a new function to add geocode to google map

function* googleMapSaga() {
    yield takeEvery(GET_MAP.GET, getAddress)
    yield takeEvery(GET_MAP.RUN_GEO, runGeocode)
}

export default googleMapSaga;