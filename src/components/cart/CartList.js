import React from "react";
import { connect } from "react-redux";

import CartListItem from "components/cart/CartListItem";
import { getCartList } from "redux/selectors/cartSelectors";
import { CartListWrapper } from "containers/Cart/style";

const CartList = ({cartList}) => {
  let cartListWrapper = (
    <CartListWrapper className="empty">购 物 车 内 空 空 如 也</CartListWrapper>
  );

  if (cartList.length) {
    cartListWrapper = (
      <CartListWrapper>
        {cartList.map((item) => (
          <CartListItem key={item} item={item} />
        ))}
      </CartListWrapper>
    );
  }
  return (
    <div>
      {cartListWrapper}
    </div>
  );
};

const mapState = state => ({
  cartList: getCartList(state),
});

export default connect(mapState, null)(CartList);
