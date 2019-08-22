import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    value:1,
    cartList: []
});

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.ADD_CART_ITEM:
            const newState = JSON.parse(JSON.stringify(state));
            if(newState.cartList.some((item) => item.desc===action.cartItem.desc)){
                newState.cartList.forEach((item) => {
                    if(item.desc===action.cartItem.desc){
                        item.count+=action.cartItem.count;
                    }
                });
            }else{
                newState.cartList.push(action.cartItem);
            }
            return fromJS(newState);
        default:
            return state;
    }
}
