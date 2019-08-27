import React from 'react';
import ListItemContainer from "../containers/ListItemContainer";
import {createSelector} from 'reselect';

export const getHomeList = (state) => state.getIn(['home','homeList']);

export const getPage = (state) => state.getIn(['home','page']);

export const itemPerPage = 4;

export const getProductArea = createSelector(
    [getHomeList,getPage],
    (homeList, page) => {
        let newList = homeList.toJS();
        let pageList = [];
        if(newList.length){
            for(let i = (page - 1) * (itemPerPage > 4 ? 4 : itemPerPage);i < page * (itemPerPage > 4 ? 4 : itemPerPage);i++){
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
    }
);
