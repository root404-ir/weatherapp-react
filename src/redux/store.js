import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherReducer";
import weatherMapReducer from "./weatherMap/mapReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
    weather: weatherReducer,
    weatherMap: weatherMapReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
