import React from 'react';
import {connect} from 'react-redux';
import Amount from '../../../base/amount';
import {actionCreators} from '../store';
import {CartItem} from '../style';

const CartListItem = (props) => {
    return(
        <CartItem key={props.item.desc}>
            <div className="product-checkbox"><i className={`iconfont ${props.item.checked?'iconxuankuang':'iconxuankuang-copy'}`} onClick={() => props.handleCheckBoxClick(props.item)}></i></div>
            <div className="product-info">
                <img className="product-img" src={props.item.imgUrl} alt=""/>
                <p className="product-desc">{props.item.desc}</p>
            </div>
            <div className="product-price">￥{props.item.price + '.00'}</div>
            <div className="product-count">
                <Amount type="cartAmount" item={props.item}></Amount>
            </div>
            <div className="product-totalPrice">￥{(props.item.price)*(props.item.count) + '.00'}</div>
            <div className="product-operation"><i className="iconfont iconcuo" onClick={() => props.handleDeleteCartItem(props.item)}></i></div>
        </CartItem>
    )
};

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

export default connect(null,mapDispatch)(CartListItem);
