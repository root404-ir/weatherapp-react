import { RECEIVE_WEATHER_MAP, RECEIVE_WEATHER_MAP_ERROR, SEND_WEATHER_MAP } from "./mapTypes"

const weatherMapState = {
    loading: false,
    mapData: '',
    error: ''
}

const weatherMapReducer = (state = weatherMapState, action) => {
    switch (action.type) {
        case SEND_WEATHER_MAP:
            return { ...state, loading: true }
        case RECEIVE_WEATHER_MAP:
            return { ...state, loading: false, mapData: action.payload, error: '' }
        case RECEIVE_WEATHER_MAP_ERROR:
            return { ...state, loading: false, mapData: '', error: action.payload }
        default:
            return state
    }
}
export default weatherMapReducer