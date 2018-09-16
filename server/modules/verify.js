const axios = require('axios');
//This work
module.exports = async name => {
  try {
    console.log('checking what hosital name is pushing into the api',name)
    const url=`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${name}&types=hospital&key=AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M`
    let { data } = await axios.get(url);
    console.log('what is the hosptail', data)
    const isVerified = data.results.some(hospital => {
      return hospital.types.some(type => type === 'hospital' || type === 'health');
    });
    return isVerified;
  } catch (err) {
    throw new Error(err);
  }
}