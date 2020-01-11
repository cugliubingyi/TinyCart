import React from "react";
import { connect } from "react-redux";
import { getCartList, getCartArea } from "redux/selectors/cartSelectors";
import { CartListWrapper } from "containers/Cart/style";

const CartList = props => {
  return (
    <div>
      {props.cartList.length ? (
        <CartListWrapper>{props.cartArea}</CartListWrapper>
      ) : (
        <CartListWrapper className="empty">
          购 物 车 内 空 空 如 也
        </CartListWrapper>
      )}
    </div>
  );
};

const mapState = state => ({
  cartList: getCartList(state),
  cartArea: getCartArea(state)
});

export default connect(mapState, null)(CartList);
