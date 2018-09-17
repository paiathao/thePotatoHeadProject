import axios from 'axios'

//Store new lat and long to  database
export function runStoreLocation(body){
    return axios.post(`/api/map`,body)
    .then(response => {
        return response.data;
    })
    .catch((error) => { throw error; });
}
//This will run geocode from the address we got from database
export function runGeocode(data){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M`
    return axios.get(url)
    .then(response => response.data.results)
    .catch((error) => { throw error; });
}


//Go grab lat and long
export function runLatandLong(){
    return axios.get('/api/map')
    .then(response => {
        return response.data;
    })
    .catch((error) => { throw error; });
}