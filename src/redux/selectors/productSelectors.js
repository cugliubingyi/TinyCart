import React from "react";
import ListItem from "components/home/ListItem";
import { createSelector } from "reselect";

export const getProductList = state => state.products.productList;

export const getCurPage = state => state.products.curPage;

export const itemPerPage = 4;

export const getProductArea = createSelector(
  [getProductList, getCurPage],
  (productList, page) => {
    let pageList = [];
    if (productList.length) {
      for (
        let i = (page - 1) * (itemPerPage > 4 ? 4 : itemPerPage);
        i < page * (itemPerPage > 4 ? 4 : itemPerPage);
        i++
      ) {
        if (i < productList.length) {
          pageList.push(<ListItem key={i} index={i} />);
        } else {
          break;
        }
      }
    }
    return pageList;
  }
);
