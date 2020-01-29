import React from "react";
import { connect } from "react-redux";
import { changeCheckAll } from "redux/reducers/cart";
import { getCartList } from "redux/selectors/cartSelectors";
import { CartHeaderWrapper, CartHeaderCheckAll } from "containers/Cart/style";

const CartHeader = props => {
  const checkAll = props.cartList.every(item => item.checked === true);
  return (
    <div>
      {props.cartList.length ? (
        <CartHeaderWrapper>
          <CartHeaderCheckAll>
            <i
              className={`iconfont ${
                checkAll ? "iconxuankuang" : "iconxuankuang-copy"
              }`}
              onClick={() => props.handleCheckAllClick(checkAll)}
            ></i>
            全选
          </CartHeaderCheckAll>
          <div className="product-desc">商品信息</div>
          <div className="product-price">单价</div>
          <div className="product-count">数量</div>
          <div className="product-totalPrice">金额</div>
          <div className="product-operation">操作</div>
        </CartHeaderWrapper>
      ) : null}
    </div>
  );
};

const mapState = state => ({
  cartList: getCartList(state)
});

const mapDispatch = dispatch => ({
  handleCheckAllClick(checkAll) {
    dispatch(changeCheckAll(checkAll));
  }
});

export default connect(mapState, mapDispatch)(CartHeader);
