import { put, takeEvery } from 'redux-saga/effects';
import { GET_MAP } from '../actions/googleMapAction'
import { runGetAddress, runGeocode, runGoogleMap } from '../requests/googleMapRequest'

//Get data from database
function* getAddress() {
    try {
        let data = yield runGetAddress()
        const database ={
            //Will add name of hospital/zip after database work
            //will need to be data.adress etc once everything is up
            adresss: data
        } 
        console.log('did we hitbody',database)
     const location =  yield runGeocode(database);
      const body = {
        longitude: location[0].geometry.location.lng,
        latitude: location[0].geometry.location.lat,
    }
    console.log('whatthefudgeisthis', body)
    yield put({
        type:GET_MAP.SET_DATABASE_ADDRESS,
        payload: body
    })
    } catch (error) {
        console.log(error);
    };
}

// function* runGeocode(mapAddress) {
//     try {
 
//         let location = yield runGetGeocode(mapAddress)
//         const body = {
//             longitude: location[0].geometry.location.lng,
//             latitude: location[0].geometry.location.lat,
//         }
//         console.log('what is in the body?', body)
//         // yield runGoogleMap(body);
//         yield put({
//             type:GET_MAP.SET_GOOGLE_MARKER,
//             payload:body
//         })
//         console.log('what is the payload', body)
//     } catch (error) {
//         console.log(error)
//     }
// }

//Need a new function to add geocode to google map
function* googleMapSaga() {
    yield takeEvery(GET_MAP.GET, getAddress)
    // yield takeEvery(GET_MAP.RUN_GEO, runGeocode)
}

export default googleMapSaga;