import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    cartList: [],
    checkAll: false
});

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.ADD_CART_ITEM:
            const newState = JSON.parse(JSON.stringify(state));
            if(newState.cartList.some((item) => item.desc === action.cartItem.desc)){
                newState.cartList.forEach((item) => {
                    if(item.desc === action.cartItem.desc){
                        item.count += action.cartItem.count;
                        item.totalPrice += (action.cartItem.count)*(action.cartItem.price)
                    }
                });
            }else{
                newState.cartList.push(action.cartItem);
            }
            return fromJS(newState);
        case constants.DELETE_CART_ITEM:
            let newState1 = JSON.parse(JSON.stringify(state));
            if(newState1.cartList.some((item) => item.desc === action.item.desc)){
                newState1.cartList = newState1.cartList.filter((item) => item.desc !== action.item.desc)
            }
            return fromJS(newState1);
        case constants.CHANGE_SUBTRACT_CLICK:
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.cartList.forEach((item) => {
                if(item.desc === action.item.desc){
                    item.count = (item.count === 1)?1:(item.count - 1);
                    item.totalPrice = (item.count)*(item.price);
                }
            });
            return fromJS(newState2);
        case constants.CHANGE_ADD_CLICK:
            let newState3 = JSON.parse(JSON.stringify(state));
            newState3.cartList.forEach((item) => {
                if(item.desc === action.item.desc){
                    item.count ++;
                    item.totalPrice = (item.count)*(item.price);
                }
            });
            return fromJS(newState3);
        case constants.CHANGE_INPUT:
            let newState4 = JSON.parse(JSON.stringify(state));
            newState4.cartList.forEach((item) => {
                if(item.desc === action.item.desc){
                    item.count = action.count;
                    item.totalPrice = (item.count)*(item.price);
                }
            });
            return fromJS(newState4);
        case constants.CHANGE_CHECK_ALL:
            let newState5 = JSON.parse(JSON.stringify(state));
            newState5.checkAll = action.checkAll;
            newState5.cartList.forEach((item) => {
                item.checked = action.checkAll
            });
            return fromJS(newState5);
        case constants.CHANGE_CHECK_BOX:
            let newState6 = JSON.parse(JSON.stringify(state));
            newState6.cartList.forEach((item) => {
                if(item.desc === action.item.desc){
                    item.checked = action.checked;
                }
            });
            newState6.checkAll = newState6.cartList.every((item) => item.checked);
            return fromJS(newState6);
        default:
            return state;
    }
}
