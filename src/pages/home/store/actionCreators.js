import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';
import {itemPerPage} from "../selectors";

const changeHomeInfo = (result) => ({
    type:constants.CHANGE_HOME_INFO,
    list:fromJS(result.homeList),
    totalPage:Math.ceil((result.homeList.length)/(itemPerPage > 4 ? 4 : itemPerPage))
});

export const changePage = (page) => ({
    type:constants.CHANGE_PAGE,
    page
});

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            if(res.data && res.data.success){
                const result = res.data.data;
                dispatch(changeHomeInfo(result));
            }
        })
    }
};
