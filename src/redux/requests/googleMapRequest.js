import axios from 'axios'

//Get address from database
export function runGetAddress(){
    console.log('did we get to the googlemapRequest')
    return axios.get('/api/map')
    .then(response => {
        return response.data;
    })
    .catch((error) => { throw error; });
}
//This will run geocode from the address we got from database
export function runGeocode(body){
    console.log('dnasodnasojd?',body.adresss)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${body.adresss}&key=AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M`
    return axios.get(url)
    .then(response => response.data.results)
    .catch((error) => { throw error; });
}

//For now don't use this until we loop through marker
// export function runGoogleMap(body){
//     console.log('did we hit this here?', body)
// }