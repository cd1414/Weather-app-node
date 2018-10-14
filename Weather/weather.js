const axios = require('axios');

const getWeather = async(lat, lng) => {

    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);

    // if (res.data.status === "") {
    //     throw new Error(`Dont't exist data for the lat: ${lat} and lon: ${lng}`)
    // }
    return {
        city: res.data.name,
        temp: res.data.main.temp,
        temp_min: res.data.main.temp_min,
        temp_max: res.data.main.temp_max
    }
}

module.exports = {
    getWeather
}