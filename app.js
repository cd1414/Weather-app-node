const argv = require('../05-Weather/Config/yargs').argv;
const addressInfo = require('../05-Weather/Address/address');
const weatherInfo = require('../05-Weather/Weather/weather');


// address.getAddressLatLng(argv.address)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// weather.getWeather(44.977753, -93.2650108)
//     .then(weather => console.log(weather))
//     .catch(err => console.log(err));


let getInfo = async(address) => {

    try {
        let coors = await addressInfo.getAddressLatLng(address);
        let weather = await weatherInfo.getWeather(coors.lat, coors.lng);

        return `The temperature in ${coors.address} is ${weather.temp}`;
    } catch (error) {
        return `Dont could get the weather in ${address}`;
    }
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(err => console.log(err));