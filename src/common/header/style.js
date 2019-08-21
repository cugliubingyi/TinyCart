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
  width:80px;
  height:60px;
  background:url(${logoPic});
  background-size:60px 40px;
  background-repeat:no-repeat;
  background-position:10px 10px;
`;

export const CartButton = styled.div`
  float:right;
  width:80px;
  height:60px;
  text-align:center;
  line-height:60px;
  color:#333;
`;
