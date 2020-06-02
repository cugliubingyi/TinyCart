import React from "react";
import { connect } from "react-redux";
import {
  getProductList,
  getCurPage,
  getProductArea,
} from "redux/selectors/productSelectors";
import { ProductList } from "containers/Home/style";

const List = props => {
  return (
    <div>
      <ProductList>{props.pageList}</ProductList>
    </div>
  );
};

const mapState = (state) => ({
  productList: getProductList(state),
  page: getCurPage(state),
  pageList: getProductArea(state),
});

export default connect(mapState, null)(List);
