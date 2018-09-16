export const GET_MAP={
    //go get mongoose database
    GET: 'GET_MAP_GEOCODE',
    //set data to redux state
    SET:'GET_MAP_SET',
    //Now go set store it in redux state
    SET_DATABASE_ADDRESS: 'GET_MAP_SET_DATABASE_ADDRESS',
    //store the geo location
    STORE_GEO:'GET_MAP_STORE_GEO',
    //Lat and Long is in Database
    LOCATION_LOADED:'GET_MAP_LOCATION_LOADED',
    //This will allow lat and long to be use in redux
    USE_LAT_LNG:'GET_MAP_USE_LAT_LNG'
}

console.log('googlemapAction')