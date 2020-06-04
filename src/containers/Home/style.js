import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const ProductListWrapper = styled.ul`
  margin-top: 200px;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const ProductItemWrapper = styled.li`
  float: left;
  margin-right: 20px;
  width: 225px;
  height: 100%;
  .product-link {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const ProductPicWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-left: 1px;
  .product-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ProductInfo = styled.div`
  padding: 10px;
  background: #f5f5f5;
  .product-name {
    height: 35px;
    line-height: 18px;
    font-size: 12px;
    color: #a3a3a3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .product-price {
    font-size: 12px;
    color: #999;
    height: 20px;
    line-height: 20px;
    .product-red {
      font-size: 18px;
      color: #f0615c;
      font-weight: bold;
    }
  }
`;

export const PaginationWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const PaginationList = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationItem = styled.li`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  &.pagination-num:hover {
    background: #ddd;
    border-radius: 30px;
  }
  &.pagination-active {
    color: #fff;
    background: #4d555d;
    border-radius: 30px;
    &.pagination-num:hover {
      color: #fff;
      background: #4d555d;
      border-radius: 30px;
    }
  }
`;
