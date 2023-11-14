import axios from "axios";
import { HEADERS, API_KEY } from "../constants";

const httpClient = {
     axiosInstance(reqUrl, reqMethod) {
        return axios({
            url: reqUrl,
            headers: HEADERS,
            method: reqMethod,
            responseType: 'json'
        }).then(res => {
            return {response: res.data}
        }).catch(err => {
            return {
                response: err.response ? err.response.data : 'undefined error',
                statusCode: err.response ? err.response.status: 'undefined status'
            }
        });
    },
    getActualWeatherByCityName(cityName) {
        const URL_ACTUAL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
        const ACTUAL_WEATHER = this.axiosInstance(URL_ACTUAL_WEATHER, 'GET');
        return ACTUAL_WEATHER;
    },
    getForecastWeather(cityName) {
        const URL_FORECAST_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?q={${cityName}}&appid=${API_KEY}`;
        const FORECAST_WEATHER = this.axiosInstance(URL_FORECAST_WEATHER, 'GET');
        console.log(FORECAST_WEATHER);
    }
}

export default httpClient;