import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherReducer";
import { thunk } from "redux-thunk";

export const store = configureStore({ reducer: weatherReducer }, applyMiddleware(thunk))
