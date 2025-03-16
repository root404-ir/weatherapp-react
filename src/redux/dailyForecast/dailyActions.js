import axios from "axios"
import { RECEIVE_DAILY_WEATHER_DATA, RECEIVE_DAILY_WEATHER_ERROR, SEND_DAILY_WEATHER } from "./dailyTypes"

export const sendDailyData = () => {
    return {
        type: SEND_DAILY_WEATHER
    }
}
export const receiveDailyData = (dailyData) => {
    return {
        type: RECEIVE_DAILY_WEATHER_DATA,
        payload: dailyData
    }
}
export const receiveDailyError = (error) => {
    return {
        type: RECEIVE_DAILY_WEATHER_ERROR,
        payload: error
    }
}

export const getDailyWeather = () => {
    return dispatch => {
        dispatch(sendDailyData())
        axios.get('https://one-api.ir/weather/?token=634793:67961f262e957&action=daily&city=تهران').then(res => {
            dispatch(receiveDailyData(res.data.result))
        }).catch(error => {
            dispatch(receiveDailyError(error))
        })
    }
}