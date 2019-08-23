import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width:960px;
  margin:0 auto;
  margin-top:200px;
  display:flex;
`;

export const ProductPic = styled.div`
  position:relative;
  width:360px;
  padding-bottom:360px;
  .product-img{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`;

export const ProductInfo = styled.div`
  flex:1;
  padding-left:20px;
  position:relative;
  .product-desc{
    width:100%;
    height:40px;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    color: #3C3C3C;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    white-space:normal!important;
    word-wrap:break-word;
  }
`;

export const ProductGrid = styled.div`
  margin-top:100px;
  display:grid;
  grid-template-rows:60px 60px;
  grid-template-columns:80px auto;
`;

export const ProductGridItem = styled.div`
  position:relative;
  line-height:60px;
    &.product-price{
      font-size:26px;
      color:#ff4400;
      font-weight:bold;
    }
`;

export const ProductAmount = styled.div`
  position:absolute;
  left:0;
  top:50%;
  margin-top:-14px;
  width:124px;
  height:28px;
  border:1px solid #eee;
  overflow:hidden;
  box-sizing:border-box;
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

export const ProductTip = styled.div`
  position:absolute;
  left:160px;
  top:50%;
  margin-top:-14px;
  padding:0 10px;
  height:28px;
  line-height:28px;
  color:#404040;
  font-size:12px;
  border:1px solid #ff4400;
`;

export const AddCartBtn = styled.a`
  position:absolute;
  left:20px;
  bottom:0;
  display:block;
  width:180px;
  height:40px;
  line-height:40px;
  text-align:center;
  border-radius:4px;
  color:#fff;
  background:#ff4400;
  cursor:pointer;
  &:hover{
    background:#f22d00;
  }
`;
