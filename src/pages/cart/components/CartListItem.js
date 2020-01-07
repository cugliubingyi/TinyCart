import React from "react";
import Amount from "../../../base/amount";
import { CartItem } from "../style";

const CartListItem = props => {
  return (
    <CartItem key={props.item.desc}>
      <div className="product-checkbox">
        <i
          className={`iconfont ${
            props.item.checked ? "iconxuankuang" : "iconxuankuang-copy"
          }`}
          onClick={() => props.handleCheckBoxClick(props.item)}
        ></i>
      </div>
      <div className="product-info">
        <img className="product-img" src={props.item.imgUrl} alt="" />
        <p className="product-desc">{props.item.desc}</p>
      </div>
      <div className="product-price">￥{props.item.price + ".00"}</div>
      <div className="product-count">
        <Amount type="cartAmount" item={props.item}></Amount>
      </div>
      <div className="product-totalPrice">
        ￥{props.item.price * props.item.count + ".00"}
      </div>
      <div className="product-operation">
        <i
          className="iconfont iconcuo"
          onClick={() => props.handleDeleteCartItem(props.item)}
        ></i>
      </div>
    </CartItem>
  );
};

export default CartListItem;
