let axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/' +
    'weather?appid=94336a684c255c83b444eca6c2a3befd&units=imperial';

//94336a684c255c83b444eca6c2a3befd


module.exports = {
    getTemp: function (location){
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message)
            }else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });

    }
};