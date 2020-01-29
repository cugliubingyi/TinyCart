import React from "react";
import { connect } from "react-redux";
import {
  getHomeList,
  getPage,
  getProductArea
} from "redux/selectors/homeSelectors";
import { ProductList } from "containers/Home/style";

const List = props => {
  return (
    <div>
      <ProductList>{props.pageList}</ProductList>
    </div>
  );
};

const mapState = state => ({
  homeList: getHomeList(state),
  page: getPage(state),
  pageList: getProductArea(state)
});

export default connect(mapState, null)(List);
