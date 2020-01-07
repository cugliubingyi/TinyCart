import { combineReducers } from "redux-immutable";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as cartReducer } from "../pages/cart/store";
import { reducer as popupReducer } from "../base/popup/store";

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  cart: cartReducer,
  popup: popupReducer
});

export default reducer;
