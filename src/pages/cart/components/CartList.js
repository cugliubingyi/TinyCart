import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {CartListWrapper,CartItem} from '../style';

class CartList extends Component{
    getCartArea(){
        const {cartList,handleDeleteCartItem,handleSubtractClick,handleAddClick,handleInputChange,handleCheckBoxClick} = this.props;
        return cartList.toJS().map((item) => (
            <CartItem key={item.desc}>
                <div className="product-checkbox"><i className={`iconfont ${item.checked?'iconxuankuang':'iconxuankuang-copy'}`} onClick={() => handleCheckBoxClick(item)}></i></div>
                <div className="product-info">
                    <img className="product-img" src={item.imgUrl} alt=""/>
                    <p className="product-desc">{item.desc}</p>
                </div>
                <div className="product-price">￥{item.price + '.00'}</div>
                <div className="product-count">
                    <div className="product-amount">
                        <div className="product-subtract" onClick={() => handleSubtractClick(item)}>-</div>
                        <input type="text" className="product-input" onChange={(e) => handleInputChange(e,item)} value={item.count}/>
                        <div className="product-add" onClick={() => handleAddClick(item)}>+</div>
                    </div>
                </div>
                <div className="product-totalPrice">￥{(item.price)*(item.count) + '.00'}</div>
                <div className="product-operation"><i className="iconfont iconcuo" onClick={() => handleDeleteCartItem(item)}></i></div>
            </CartItem>
        ));
    }

    render(){
        return(
            <div>
                {
                    this.props.cartList.toJS().length?
                        <CartListWrapper>
                            {this.getCartArea()}
                        </CartListWrapper>
                        :<CartListWrapper className="empty">购 物 车 内 空 空 如 也</CartListWrapper>
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    cartList:state.getIn(['cart','cartList'])
});

const mapDispatch = (dispatch) => ({
    handleDeleteCartItem(item){
        dispatch(actionCreators.deleteCartItem(item));
    },
    handleSubtractClick(item){
        dispatch(actionCreators.changeSubtractClick(item));
    },
    handleAddClick(item){
        dispatch(actionCreators.changeAddClick(item));
    },
    handleInputChange(e,item){
        let count = e.target.value;

        if(count === '' || isNaN(count)){
            dispatch(actionCreators.changeInput(1,item));
        }else{
            dispatch(actionCreators.changeInput(count<1?1:count,item));
        }
    },
    handleCheckBoxClick(item){
        dispatch(actionCreators.changeCheckBox(item));
    }
});

export default connect(mapState,mapDispatch)(CartList);
