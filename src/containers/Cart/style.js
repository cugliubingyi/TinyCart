import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-top: 200px;
`;

export const CartHeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b7bbbf;
  .product-desc {
    width: 320px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .product-price {
    width: 160px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .product-count {
    width: 160px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .product-totalPrice {
    width: 160px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .product-operation {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const CartHeaderCheckAll = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  .iconfont {
    font-weight: bold;
    margin-right: 6px;
    cursor: pointer;
    &.iconxuankuang {
      color: #ff4400;
    }
  }
`;

export const CartListWrapper = styled.ul`
  width: 100%;
  &.empty {
    text-align: center;
    font-size: 24px;
    padding-top: 60px;
  }
`;

export const CartItem = styled.li`
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  border-bottom: 1px solid #d9dde1;
  display: flex;
  .product-checkbox {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .iconfont {
      cursor: pointer;
      font-weight: bold;
      &.iconxuankuang {
        color: #ff4400;
      }
    }
  }
  .product-info {
    width: 320px;
    height: 100%;
    overflow: hidden;
    padding-top: 20px;
    box-sizing: border-box;
    .product-img {
      width: 80px;
      height: 80px;
      float: left;
    }
    .product-desc {
      float: left;
      width: 220px;
      height: 40px;
      line-height: 20px;
      margin-left: 10px;
      margin-right: 10px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal !important;
      word-wrap: break-word;
    }
  }
  .product-price {
    width: 160px;
    height: 100%;
    padding-top: 20px;
    font-size: 12px;
    color: #3c3c3c;
    font-weight: bold;
    box-sizing: border-box;
  }
  .product-count {
    width: 160px;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    .product-amount {
      width: 124px;
      height: 28px;
      border: 1px solid #eee;
      overflow: hidden;
      box-sizing: border-box;
      .product-subtract {
        display: block;
        float: left;
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-right: 1px solid #eee;
        box-sizing: border-box;
        cursor: pointer;
      }
      .product-input {
        float: left;
        width: 66px;
        margin-top: 1px;
        height: 100%;
        border: none;
        outline: none;
        text-align: center;
        box-sizing: border-box;
      }
      .product-add {
        display: block;
        float: right;
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-left: 1px solid #eee;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
  }
  .product-totalPrice {
    width: 160px;
    height: 100%;
    padding-top: 20px;
    font-size: 12px;
    color: #ff4400;
    font-weight: bold;
    box-sizing: border-box;
  }
  .product-operation {
    width: 80px;
    height: 100%;
    padding-top: 20px;
    .iconfont {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const CartFooterWrapper = styled.div`
  width:100%;
  height:60px;
  margin-top:20px;
  margin-bottom:20px;
  padding-left:720px;
  box-sizing:border-box;
  overflow:hidden;
  .cart-footer-total{
    float:right;
    width:160px;
    height:60px;
    line-height:60px;
    font-size:12px;
    color:#ff4400;
    font-weight:bold;
  }
  .cart-footer-close{
    float:right;
    width:80px
    height:60px;
    line-height:60px;
    text-align:center;
    color:#fff;
    font-weight:bold;
    border-radius:4px;
    background:#ff4400;
    cursor:pointer;
  }
`;
