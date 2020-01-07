import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  productInfo: {},
  count: 1,
  couldSubmit: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_PRODUCT_INFO:
      return state.set("productInfo", action.productInfo);
    case constants.CHANGE_COUNT:
      return state.set("count", action.count);
    case constants.CHANGE_COULD_SUBMIT:
      return state.set("couldSubmit", action.couldSubmit);
    default:
      return state;
  }
};
