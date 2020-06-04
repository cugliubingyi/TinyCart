import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  ProductItemWrapper,
  ProductInfo,
  ProductPicWrapper
} from "containers/Home/style";

const ProductItem = ({productList, index}) => {
  return (
    <ProductItemWrapper key={productList[index].id}>
      <Link
        className="product-link"
        to={`detail/${productList[index].id}`}
      >
        <ProductPicWrapper>
          <img
            className="product-img"
            src={productList[index].imgUrl}
            alt=""
          />
        </ProductPicWrapper>
        <ProductInfo>
          <p className="product-name">{productList[index].name}</p>
          <p className="product-price">
            ￥{" "}
            <span className="product-red">
              {productList[index].price + ".00"}
            </span>
          </p>
        </ProductInfo>
      </Link>
    </ProductItemWrapper>
  );
};

const mapState = (state) => ({
  productList: state.products.productList,
});

export default connect(mapState, null)(ProductItem);
