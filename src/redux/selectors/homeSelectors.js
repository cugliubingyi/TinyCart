import React from "react";
import ListItem from "components/home/ListItem";
import { createSelector } from "reselect";

export const getHomeList = state => state.home.homeList;

export const getPage = state => state.home.page;

export const itemPerPage = 4;

export const getProductArea = createSelector(
  [getHomeList, getPage],
  (homeList, page) => {
    let pageList = [];
    if (homeList.length) {
      for (
        let i = (page - 1) * (itemPerPage > 4 ? 4 : itemPerPage);
        i < page * (itemPerPage > 4 ? 4 : itemPerPage);
        i++
      ) {
        if (i < homeList.length) {
          pageList.push(<ListItem key={i} index={i} />);
        } else {
          break;
        }
      }
    }
    return pageList;
  }
);
