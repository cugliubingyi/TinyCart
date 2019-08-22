import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeProductInfo = (result) => ({
    type:constants.CHANGE_PRODUCT_INFO,
    productInfo:fromJS(result.detailItem)
});

export const getProductInfo = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail${id}.json`).then((res) => {
            if(res.data && res.data.success){
                dispatch(changeProductInfo(res.data.data));
            }
        })
    }
};

export const changeCount = (count) => ({
    type:constants.CHANGE_COUNT,
    count
});

export const changeCouldSubmit = (couldSubmit) => ({
    type:constants.CHANGE_COULD_SUBMIT,
    couldSubmit
});
