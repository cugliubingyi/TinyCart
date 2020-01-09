import React from "react";
import { CartListWrapper } from "../style";

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

export default CartList;
