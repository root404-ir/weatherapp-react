import { RECEIVE_DAILY_WEATHER_DATA, RECEIVE_DAILY_WEATHER_ERROR, SEND_DAILY_WEATHER } from "./dailyTypes";

const dailyState = {
    loading: false,
    dailyData: {},
    error: ''
}

const dailyReducer = (state = dailyState, action) => {
    switch (action.type) {
        case SEND_DAILY_WEATHER:
            return { ...state, lodaing: true }
        case RECEIVE_DAILY_WEATHER_DATA:
            return { ...state, loading: false, dailyData: action.payload, error: '' }
        case RECEIVE_DAILY_WEATHER_ERROR:
            return { ...state, loading: false, dailyData: {}, error: action.payload }
        default:
            return state
    }
}
export default dailyReducer