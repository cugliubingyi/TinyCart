import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getProductInfo,
  changeCount
} from "redux/reducers/detail";
import { addCartItem } from "redux/reducers/cart";
import { showPopUp } from "redux/reducers/popup";
import PopUp from "components/common/popup";
import Amount from "components/common/amount";
import {
  ProductWrapper,
  ProductPic,
  ProductInfo,
  ProductGrid,
  ProductGridItem,
  ProductTip,
  AddCartBtn
} from "./style";
import { getProductInfo as getProductInfoSelector, getCount, getCouldSubmit, getShow } from "redux/selectors/detailSelectors";

class Detail extends PureComponent {
  componentDidMount() {
    this.props.handleChangeDetail(this.props.match.params.id);
  }

  render() {
    const {
      productInfo,
      count,
      couldSubmit,
      handleAddCartBtnClick,
      show
    } = this.props;
    return (
      <div>
        <ProductWrapper>
          <ProductPic>
            <img
              className="product-img"
              src={productInfo.imgUrl}
              alt=""
            />
          </ProductPic>
          <ProductInfo>
            <p className="product-desc">{productInfo.desc}</p>
            <ProductGrid>
              <ProductGridItem>价格</ProductGridItem>
              <ProductGridItem className="product-price">
                ￥{productInfo.price + ".00"}
              </ProductGridItem>
              <ProductGridItem>数量</ProductGridItem>
              <ProductGridItem className="product-num">
                <Amount type="detailAmount" count={count} />
                {couldSubmit ? null : (
                  <ProductTip>请填写正确的宝贝数量！</ProductTip>
                )}
              </ProductGridItem>
              <AddCartBtn
                onClick={() =>
                  handleAddCartBtnClick(couldSubmit, productInfo, count)
                }
              >
                加入购物车
              </AddCartBtn>
            </ProductGrid>
          </ProductInfo>
          {show ? (
            <PopUp
              text="添加购物车成功"
              leftText="继续逛逛"
              rightText="去购物车结算"
            />
          ) : null}
        </ProductWrapper>
      </div>
    );
  }
}

const mapState = state => ({
  productInfo: getProductInfoSelector(state),
  count: getCount(state),
  couldSubmit: getCouldSubmit(state),
  show: getShow(state)
});

const mapDispatch = dispatch => ({
  handleChangeDetail(id) {
    dispatch(getProductInfo(id));
    dispatch(changeCount(1));
  },
  handleAddCartBtnClick(couldSubmit, productInfo, count) {
    if (couldSubmit) {
      let productItem = productInfo;
      const totalPrice = productItem.price * count;
      let checked = false;
      productItem = { count, totalPrice, checked, ...productItem };
      dispatch(addCartItem(productItem));
      dispatch(showPopUp());
    }
  }
});

export default connect(mapState, mapDispatch)(Detail);
