import React from "react";
import CartListItem from "../../pages/cart/components/CartListItem";
import { createSelector } from "reselect";

export const getCartList = state => state.cart.cartList;

export const getCartArea = createSelector([getCartList], cartList => {
  return cartList.map(item => <CartListItem key={item} item={item} />);
});
