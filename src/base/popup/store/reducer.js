import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    show: false
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SHOW_POP_UP:
            return state.set('show',true);
        case constants.HIDE_POP_UP:
            return state.set('show',false);
        default:
            return state;
    }
}
