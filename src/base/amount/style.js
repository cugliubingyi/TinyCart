import styled from "styled-components";

export const ProductAmount = styled.div`
  &.detail-amount{
    position:absolute;
    left:0;
    top:50%;
    margin-top:-14px;
    width:124px;
    height:28px;
    border:1px solid #eee;
    overflow:hidden;
    box-sizing:border-box;
  }
  &.cart-amount{
    width:124px;
    height:28px;
    border:1px solid #eee;
    overflow:hidden;
    box-sizing:border-box;
  }
`;

export const ProductSubtract = styled.a`
  display:block;
  float:left;
  width:28px;
  height:28px;
  line-height:28px;
  text-align:center;
  border-right:1px solid #eee;
  box-sizing:border-box;
  cursor:pointer;
`;

export const ProductInput = styled.input`
  float:left;
  width:66px;
  margin-top:1px;
  height:100%;
  border:none;
  outline:none;
  text-align:center;
  box-sizing:border-box;
`;

export const ProductAdd = styled.a`
  display:block;
  float:right;
  width:28px;
  height:28px;
  line-height:28px;
  text-align:center;
  border-left:1px solid #eee;
  box-sizing:border-box;
  cursor:pointer;
`;
