import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  homeReducer,
  detailReducer,
  cartReducer,
  popupReducer
} from "./reducers";

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  cart: cartReducer,
  popup: popupReducer
});

const middleware = getDefaultMiddleware();

const store = configureStore({
  reducer: reducer,
  preloadedState: {},
  middleware: middleware
});

export default store;
