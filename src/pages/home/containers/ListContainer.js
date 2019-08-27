import React from 'react';
import {connect} from 'react-redux';
import ListItemContainer from "./ListItemContainer";
import List from '../components/List';

const getProductArea = (homeList, page) => {
    let newList = homeList.toJS();
    let pageList = [];
    if(newList.length){
        for(let i = (page - 1) * 4;i < page * 4;i++){
            if(i < newList.length){
                pageList.push(
                    <ListItemContainer index={i}/>
                )
            }else{
                break;
            }
        }
    }
    return pageList;
};

const mapState = (state) => ({
    homeList:state.getIn(['home','homeList']),
    page:state.getIn(['home','page']),
    pageList:getProductArea(state.getIn(['home','homeList']), state.getIn(['home','page']))
});

export default connect(mapState,null)(List);
