const axios = require('axios');

module.exports = async name => {
  try {
    const url=`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${name}&types=hospital&key=AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M`
    let { data } = await axios.get(url);
    const isVerified = data.results.some(hospital => {
      return hospital.types.some(type => type === 'hospital' || type === 'health');
    });
    return isVerified;
  } catch (err) {
    throw new Error(err);
  }
}
