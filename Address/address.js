const axios = require('axios');
const API_KEYS = require("../Config/GoogleAPI");

const getAddressLatLng = async(address) => {

    let encodedUrl = encodeURI(address);
    let res = await axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${API_KEYS.key1}`)

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No results for the city ${address}`);
    }
    // Return data JSON formatted
    //console.log(JSON.stringify(res.data, undefined, 2));

    let results = res.data.results[0];
    let location = results.geometry.location;

    return {
        address: results.formatted_address,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getAddressLatLng
}