import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    productInfo: {}
});

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_PRODUCT_INFO:
            return state.set('productInfo',action.productInfo)
        default:
            return state;
    }
}
