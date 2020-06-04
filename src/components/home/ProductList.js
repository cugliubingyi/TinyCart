import React from "react";
import { connect } from "react-redux";
import {
  getProductList,
  getCurPage,
} from "redux/selectors/productSelectors";
import { ProductListWrapper } from "containers/Home/style";
import ProductItem from 'components/home/ProductItem';

const ProductList = ({productList, curPage}) => {
  let pageList = [];
  const itemPerPage = 4;
  if (productList.length) {
    for (
      let i = (curPage - 1) * (itemPerPage > 4 ? 4 : itemPerPage);
      i < curPage * (itemPerPage > 4 ? 4 : itemPerPage);
      i++
    ) {
      if (i < productList.length) {
        pageList.push(<ProductItem key={i} index={i} />);
      } else {
        break;
      }
    }
  }
  return (
    <div>
      <ProductListWrapper>{pageList}</ProductListWrapper>
    </div>
  );
};

const mapState = (state) => ({
  productList: getProductList(state),
  curPage: getCurPage(state),
});

export default connect(mapState, null)(ProductList);
