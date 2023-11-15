import axios from "axios";
import { HEADERS, API_KEY } from "../constants";

const httpClient = {
     async axiosInstance(reqUrl) {
        return await axios({
            url: reqUrl,
            headers: HEADERS,
            method: 'GET',
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
    async getActualWeatherByCityName(cityName) {
        const URL_ACTUAL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
        const ACTUAL_WEATHER =  await this.axiosInstance(URL_ACTUAL_WEATHER);
        return ACTUAL_WEATHER;
    },
    async getForecastWeather(cityName) {
        const URL_FORECAST_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
        const FORECAST_WEATHER =  await this.axiosInstance(URL_FORECAST_WEATHER);
        return FORECAST_WEATHER;
    }
}

export default httpClient;