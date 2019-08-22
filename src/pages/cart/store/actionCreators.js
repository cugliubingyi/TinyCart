import * as constants from './constants';
// import {fromJS} from 'immutable';

export const addCartItem = (cartItem) => ({
    type:constants.ADD_CART_ITEM,
    cartItem
});
