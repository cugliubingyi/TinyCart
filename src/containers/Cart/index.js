import React from "react";
import CartHeader from "components/cart/CartHeader";
import CartList from "components/cart/CartList";
import CartFooter from "components/cart/CartFooter";
import { CartWrapper } from "./style";

const Cart = () => {
  return (
    <div>
      <CartWrapper>
        <CartHeader />
        <CartList />
        <CartFooter />
      </CartWrapper>
    </div>
  );
};

export default Cart;
