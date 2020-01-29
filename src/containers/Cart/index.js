import React from "react";
import CartHeader from "components/cart/CartHeader";
import CartList from "components/cart/CartList";
import CartFooter from "components/cart/CartFooter";
import SiteLayout from "layout/SiteLayout";
import { CartWrapper } from "./style";

const Cart = () => {
  return (
    <SiteLayout>
      <CartWrapper>
        <CartHeader />
        <CartList />
        <CartFooter />
      </CartWrapper>
    </SiteLayout>
  );
};

export default Cart;
