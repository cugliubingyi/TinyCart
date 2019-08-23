import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {CartHeaderWrapper,CartHeaderCheckAll} from '../style';

class CartHeader extends Component{
    render(){
        const {cartList,checkAll,handleCheckAllClick} = this.props;
        return(
            <div>
                {
                    cartList.toJS().length?
                        <CartHeaderWrapper>
                            <CartHeaderCheckAll><i className={`iconfont ${checkAll?'iconxuankuang':'iconxuankuang-copy'}`} onClick={() => handleCheckAllClick(checkAll)}></i>全选</CartHeaderCheckAll>
                            <div className="product-desc">商品信息</div>
                            <div className="product-price">单价</div>
                            <div className="product-count">数量</div>
                            <div className="product-totalPrice">金额</div>
                            <div className="product-operation">操作</div>
                        </CartHeaderWrapper>
                        :null
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    cartList:state.getIn(['cart','cartList']),
    checkAll:state.getIn(['cart','checkAll'])
});

const mapDispatch = (dispatch) => ({
    handleCheckAllClick(checkAll){
        dispatch(actionCreators.changeCheckAll(checkAll));
    }
});

export default connect(mapState,mapDispatch)(CartHeader);
