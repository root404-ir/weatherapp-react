import { combineReducers } from "redux";
import weatherReducer from "./weather/weatherReducer";
import weatherMapReducer from "./weatherMap/mapReducer";
import dailyReducer from "./dailyForecast/dailyReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    weatherMap: weatherMapReducer,
    dailyWeather: dailyReducer
})