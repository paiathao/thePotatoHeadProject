import { put, takeEvery } from 'redux-saga/effects';
import { GET_MAP } from '../actions/googleMapAction'
import { runGetAddress, runGeocode, runGoogleMap } from '../requests/googleMapRequest'

//Get data from database
function* getAddress() {
    try {
        //Grab address from database
        let data = yield runGetAddress()
        //Now store those data in an array
        let locations = [];
        //Run a for loop to get lat and lng and push it to the locations array
        for (let i = 0; i < data.length; i ++){
            const location =  yield runGeocode(data[i].address);
            const body={
                longitude: location[0].geometry.location.lng,
                latitude: location[0].geometry.location.lat,
            }
            locations.push(body);
        }
            yield put({
                type:GET_MAP.SET_DATABASE_ADDRESS,
                payload: locations
            })
    }catch (error) {
        console.log(error);
    };
}


function* googleMapSaga() {
    yield takeEvery(GET_MAP.GET, getAddress)
}

export default googleMapSaga;