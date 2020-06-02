import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  productsReducer,
  detailReducer,
  cartReducer,
  popupReducer
} from "./reducers";

const reducer = combineReducers({
  products: productsReducer,
  detail: detailReducer,
  cart: cartReducer,
  popup: popupReducer,
});

const middleware = getDefaultMiddleware();

const store = configureStore({
  reducer: reducer,
  preloadedState: {},
  middleware: middleware
});

export default store;
