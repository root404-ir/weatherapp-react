import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_REQUEST, SEND_WEATHER_REQUEST } from "./weatherTypes"

const weatherState = {
    loading: false,
    data: {},
    error: ''
}
const weatherReducer = (state = weatherState, action) => {
    switch (action.type) {
        case SEND_WEATHER_REQUEST:
            return { ...state, loading: true }
        case RECEIVE_WEATHER_REQUEST:
            return { ...state, loading: false, data: action.payload, error: '' }
        case RECEIVE_WEATHER_ERROR:
            return { ...state, loading: false, data: {}, error: action.payload }
        default:
            return state
    }
}
export default weatherReducer