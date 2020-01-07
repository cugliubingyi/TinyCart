import * as constants from "./constants";
// import {fromJS} from 'immutable';

export const addCartItem = cartItem => ({
  type: constants.ADD_CART_ITEM,
  cartItem
});

export const deleteCartItem = item => ({
  type: constants.DELETE_CART_ITEM,
  item
});

export const changeSubtractClick = item => ({
  type: constants.CHANGE_SUBTRACT_CLICK,
  item
});

export const changeAddClick = item => ({
  type: constants.CHANGE_ADD_CLICK,
  item
});

export const changeInput = (count, item) => ({
  type: constants.CHANGE_INPUT,
  count,
  item
});

export const changeCheckAll = checkAll => ({
  type: constants.CHANGE_CHECK_ALL,
  checkAll
});

export const changeCheckBox = item => ({
  type: constants.CHANGE_CHECK_BOX,
  item,
  checked: !item.checked
});
