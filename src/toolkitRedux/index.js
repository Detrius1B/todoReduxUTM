import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
    todoSlice: todoSlice
})

export const store = configureStore({
    reducer: rootReducer
})