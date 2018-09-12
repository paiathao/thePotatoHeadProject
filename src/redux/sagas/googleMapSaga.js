import { put, takeEvery } from 'redux-saga/effects';
import { GET_MAP } from '../actions/googleMapAction'
import { runGetAddress, runGeocode, runGoogleMap } from '../requests/googleMapRequest'

//Get data from database
function* getAddress() {
    try {
        // let storeAddress = []
        let data = yield runGetAddress()
        let locations = [];

        for (let i = 0; i < data.length; i ++){
            console.log('thisisisis',data)
            const location =  yield runGeocode(data[i].address);
            const body={
                longitude: location[0].geometry.location.lng,
                latitude: location[0].geometry.location.lat,
            }
            locations.push(body);
        }
        console.log('thihsie',locations)
            yield put({
                type:GET_MAP.SET_DATABASE_ADDRESS,
                payload: locations
            })
    }catch (error) {
        console.log(error);
    };
}

// function* runGeo(){
//     try{

//     }
// }



//Need a new function to add geocode to google map
function* googleMapSaga() {
    yield takeEvery(GET_MAP.GET, getAddress)
    // yield takeEvery(GET_MAP.SET_DATABASE_ADDRESS, runGeo)

}

export default googleMapSaga;