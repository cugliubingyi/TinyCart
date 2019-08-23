import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as cartActionCreators} from '../cart/store';
import {actionCreators as popUpActionCreators} from '../../base/popup/store';
import PopUp from '../../base/popup';
import {ProductWrapper,ProductPic,ProductInfo,ProductGrid,ProductGridItem,ProductAmount,ProductSubtract,ProductInput,ProductTip,ProductAdd,AddCartBtn} from './style';

class Detail extends Component{
    componentDidMount(){
        this.props.handleChangeDetail(this.props.match.params.id);
    }

    render(){
        const {productInfo,count,couldSubmit,handleInputChange,handleChangeCount,handleAddCartBtnClick,show} = this.props;
        return(
            <div>
                <ProductWrapper>
                    <ProductPic>
                        <img className="product-img" src={productInfo.get('imgUrl')} alt=""/>
                    </ProductPic>
                    <ProductInfo>
                        <p className="product-desc">{productInfo.get('desc')}</p>
                        <ProductGrid>
                            <ProductGridItem>价格</ProductGridItem>
                            <ProductGridItem className="product-price">￥{productInfo.get('price')}</ProductGridItem>
                            <ProductGridItem>数量</ProductGridItem>
                            <ProductGridItem className="product-num">
                                <ProductAmount>
                                    <ProductSubtract onClick={() => handleChangeCount(count-1)}>-</ProductSubtract>
                                    <ProductInput onChange={handleInputChange} value={count}/>
                                    <ProductAdd onClick={() => handleChangeCount(count+1)}>+</ProductAdd>
                                </ProductAmount>
                                {
                                    couldSubmit?
                                        null
                                        :<ProductTip>请填写正确的宝贝数量！</ProductTip>
                                }
                            </ProductGridItem>
                            <AddCartBtn onClick={() => handleAddCartBtnClick(couldSubmit,productInfo,count)}>加入购物车</AddCartBtn>
                        </ProductGrid>
                    </ProductInfo>
                    {
                        show?
                            <PopUp/>
                            :null

                    }
                </ProductWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    productInfo:state.getIn(['detail','productInfo']),
    count:state.getIn(['detail','count']),
    couldSubmit:state.getIn(['detail','couldSubmit']),
    show:state.getIn(['popup','show'])
});

const mapDispatch = (dispatch) => ({
    handleChangeDetail(id){
        dispatch(actionCreators.getProductInfo(id));
        dispatch(actionCreators.changeCount(1));
    },
    handleInputChange(e){
        let count = e.target.value;

        if(count === ''){
            dispatch(actionCreators.changeCount(count));
            dispatch(actionCreators.changeCouldSubmit(false));
        }else{
            if(isNaN(count)){
                dispatch(actionCreators.changeCount(1));
                dispatch(actionCreators.changeCouldSubmit(true));
            }else{
                dispatch(actionCreators.changeCount(count<1?1:count));
                dispatch(actionCreators.changeCouldSubmit(true));
            }
        }
    },
    handleChangeCount(count){
        dispatch(actionCreators.changeCount(count<1?1:count));
        dispatch(actionCreators.changeCouldSubmit(true));
    },
    handleAddCartBtnClick(couldSubmit,productInfo,count){
        if(couldSubmit){
            let productItem = productInfo.toJS();
            const totalPrice = productItem.price*count;
            let checked = false;
            productItem = {count,totalPrice,checked,...productItem};
            dispatch(cartActionCreators.addCartItem(productItem));
            dispatch(popUpActionCreators.changeShowPopUp());
        }
    }
});

export default connect(mapState,mapDispatch)(Detail);
