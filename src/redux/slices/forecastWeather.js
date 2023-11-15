import { createSlice } from "@reduxjs/toolkit";
import initialStateWeather from '../initialStatesJson/actualWeather.json'

const initialState = initialStateWeather;

export const forecastWeatherSlice = createSlice({
    name: 'forecastWeather',
    initialState,
    reducers: {
        getMultipleWeather: (state, action) => {
            return action.payload;
        }
    }
})

export const {getMultipleWeather} = forecastWeatherSlice.actions;