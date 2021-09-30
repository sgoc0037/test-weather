import { weatherAPI } from "../DAL/DAL";

const SETCITY = "SETCITY"
const SETFORECAST = "SETFOREACAST"

let initialState = {
    current: null,
    chanceOf: {
        rain: null,
    },
    location: null,
    forecast: []
}

const weatherReducer = (state = initialState, action) => {

    let date = new Date().getHours()

    switch (action.type) {
        case SETCITY:
            return { ...state, current: action.obj.current, location: action.obj.location }
        case SETFORECAST:
            return {
                ...state, forecast: action.obj.forecast.forecastday.map(item => {
                    return { ...item }
                }),
                chanceOf: {
                    rain: action.obj.forecast.forecastday[0].hour[date].chance_of_rain
                }
            }
        default: return state;
    }
}

const setCityActionCreator = (obj) => {
    return { type: SETCITY, obj }
}

const setForecastActionCreator = (obj) => {
    return { type: SETFORECAST, obj }
}

export const acceptSetCity = () => {
    return async (dispatch) => {
        let response = await weatherAPI.gettingWeather()
        console.log(response)
        dispatch(setCityActionCreator(response))
    }
}

export const acceptSetForecast = () => {
    return async (dispatch) => {
        let response = await weatherAPI.gettingForecastWeather()
        console.log(response)
        dispatch(setForecastActionCreator(response))
    }
}

export default weatherReducer;