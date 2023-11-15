import { createSlice } from "@reduxjs/toolkit";
import initialStateWeather from '../initialStatesJson/actualWeather.json'

const initialState = initialStateWeather;

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
        getCurrentLocationWeather: (state, action) => {
            return action.payload;
        }
    }
})

export const {getCurrentLocationWeather} = currentWeatherSlice.actions;