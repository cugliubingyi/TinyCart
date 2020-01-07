import React from "react";
import CartListItemContainer from "../containers/CartListItemContainer";
import { createSelector } from "reselect";

export const getCartList = state => state.getIn(["cart", "cartList"]);

export const getCartArea = createSelector([getCartList], cartList => {
  return cartList.toJS().map(item => <CartListItemContainer item={item} />);
});
