import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { CartFooterWrapper } from "containers/Cart/style";

class CartFooter extends PureComponent {
  getFooterArea() {
    const { cartList } = this.props;
    if (cartList.length) {
      return (
        <CartFooterWrapper>
          <div className="cart-footer-close">去结算</div>
          <div className="cart-footer-total">
            ￥{this.getFooterTotal(cartList) + ".00"}
          </div>
        </CartFooterWrapper>
      );
    } else {
      return null;
    }
  }

  getFooterTotal(list) {
    let total = 0;
    list.forEach(item => {
      if (item.checked) {
        total += item.totalPrice;
      }
    });
    return total;
  }

  render() {
    return <div>{this.getFooterArea()}</div>;
  }
}

const mapState = state => ({
  cartList: state.cart.cartList
});

export default connect(mapState, null)(CartFooter);
