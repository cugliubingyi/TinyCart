import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    homeList: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_HOME_INFO:
            return state.merge({
                'homeList':action.list,
                'totalPage':action.totalPage
            });
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}
