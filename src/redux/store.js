import { configureStore } from "@reduxjs/toolkit";
import { currentWeatherSlice } from "./slices/currentWeather";
import { forecastWeatherSlice } from "./slices/forecastWeather";

export const store = configureStore({
    reducer: {
        currentWeather: currentWeatherSlice.reducer,
        forecastWeather: forecastWeatherSlice.reducer
    }
});
