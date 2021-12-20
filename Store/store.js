import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/userSlice";

const reducer = combineReducers({
  userReducer,
});

export const store = configureStore({
  reducer,
});
