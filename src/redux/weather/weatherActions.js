import axios from "axios"
import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_REQUEST, SEND_WEATHER_REQUEST } from "./weatherTypes"

export const sendWeatherRequest = () => {
    return {
        type: SEND_WEATHER_REQUEST
    }
}
export const receiveWeatherReaponse = (data) => ({
    type: RECEIVE_WEATHER_REQUEST,
    payload: data
})
export const receiveWeatherError = (error) => {
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload: error
    }
}


export const getWeatherInfo = (query) => {
    return dispatch => {
        dispatch(sendWeatherRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=8d6f6846f434b94fe4a1ac65bf7719ad`).then(res => {
            dispatch(receiveWeatherReaponse(res.data))
        }).catch(error => {
            dispatch(receiveWeatherError(error))
        })
    }
}
