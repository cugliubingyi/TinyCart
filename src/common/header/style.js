import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  width:100%;
  height:60px;
  border-bottom:1px solid #eee;
`;

export const Nav = styled.div`
  overflow:hidden;
  width:960px;
  height:60px;
  margin:0 auto;
`;

export const Logo = styled.div`
  float:left;
  width:120px;
  height:60px;
  background:url(${logoPic});
  background-size:80px 40px;
  background-repeat:no-repeat;
  background-position:20px 10px;
`;

export const CartButton = styled.div`
  float:right;
  width:120px;
  height:60px;
  text-align:center;
  line-height:60px;
  color:#333;
  :hover{
    background:#f5f5f5;
    color:#ff4400;
  }
  .iconfont{
    margin-right:6px;
    color:#ff4400;
  }
  .cart-item-num{
    margin-left:6px;
    color:#ff4400;
    font-weight:bold;
  }
`;
