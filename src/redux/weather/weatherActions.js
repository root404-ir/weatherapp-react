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
        axios.get(`https://one-api.ir/weather/?token=634793:67961f262e957&action=current&city=${query}`).then(res => {
            dispatch(receiveWeatherReaponse(res.data.result))
        }).catch(error => {
            dispatch(receiveWeatherError(error))
        })
    }
}
