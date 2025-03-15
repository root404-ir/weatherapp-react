import axios from "axios"
import { RECEIVE_WEATHER_MAP, RECEIVE_WEATHER_MAP_ERROR, SEND_WEATHER_MAP } from "./mapTypes"

export const sendWeatherMap = () => {
    return {
        type: SEND_WEATHER_MAP,
    }
}
export const receiveWeatherMap = (mapData) => {
    return {
        type: RECEIVE_WEATHER_MAP,
        payload: mapData
    }
}
export const receiveWeatherMapError = (error) => {
    return {
        type: RECEIVE_WEATHER_MAP_ERROR,
        payload: error
    }
}

export const getWeatherMap = (tab, mapData) => {
    return dispatch => {
        dispatch(sendWeatherMap())
        axios.get(`https://one-api.ir/weather/?token=634793:67961f262e957&action=weathermaps&type=${tab}`, {
            headers: {
                "Content-Type": "image/png"
            },
            responseType: "blob"
        }).then(res => {
            const image = URL.createObjectURL(res.data)
            dispatch(receiveWeatherMap(image))
        }).catch(error => {
            dispatch(receiveWeatherMapError(error))
        })
        return () => {
            URL.revokeObjectURL(mapData)
        }
    }
}