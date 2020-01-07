import React from "react";
import CartHeaderContainer from "./containers/CartHeaderContainer";
import CartListContainer from "./containers/CartListContainer";
import CartFooter from "./components/CartFooter";
import { CartWrapper } from "./style";

const Cart = () => {
  return (
    <div>
      <CartWrapper>
        <CartHeaderContainer />
        <CartListContainer />
        <CartFooter />
      </CartWrapper>
    </div>
  );
};

export default Cart;
