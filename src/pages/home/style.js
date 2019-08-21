import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
`;

export const ProductList = styled.ul`
  margin-top:200px;
  width:100%;
  height:300px;
  overflow:hidden;
`;

export const ProductItem = styled.li`
  float:left;
  margin-right:20px;
  width:225px;
  height:100%;
  .product-link{
    text-decoration:none;
  }
  &:last-of-type{
    margin-right:0;
  }
`;

export const ProductPicWrapper = styled.div`
  position:relative;
  width:100%;
  padding-bottom:100%;
  .product-img{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
  }
`;

export const ProductInfo = styled.div`
  padding:10px;
  background:#F5F5F5;
  .product-name{
    height: 39px;
    margin: 5px 0 3px;
    line-height: 18px;
    font-size:12px;
    color: #A3A3A3;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .product-price{
    font-size:12px;
    color: #999;
    .product-red{
      font-size:18px;
      color:#F0615C;
      font-weight:bold;
    }
  }
`;

export const PaginationWrapper = styled.div`
  width:960px;
  margin:0 auto;
  margin-top:100px;
`;

export const PaginationList = styled.ul`
  width:100%;
  height:60px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const PaginationItem = styled.li`
  width:60px;
  height:60px;
  text-align:center;
  line-height:center;
  cursor:pointer;
`;
