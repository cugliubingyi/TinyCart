import React from "react";
import CartListItemContainer from "../../pages/cart/containers/CartListItemContainer";
import { createSelector } from "reselect";

export const getCartList = state => state.cart.cartList;

export const getCartArea = createSelector([getCartList], cartList => {
  return cartList.map(item => <CartListItemContainer key={item} item={item} />);
});
