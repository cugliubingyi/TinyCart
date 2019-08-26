import React from 'react';
import {connect} from 'react-redux';
import {actionCreators as detailActionCreators} from '../../pages/detail/store';
import {actionCreators as cartActionCreators} from "../../pages/cart/store";
import {ProductAmount,ProductSubtract,ProductInput,ProductAdd} from './style';

const Amount = (props) => {
    if(props.type === "detailAmount"){
        return(
            <ProductAmount className="detail-amount">
                <ProductSubtract onClick={() => props.handleChangeCount(props.count-1)}>-</ProductSubtract>
                <ProductInput onChange={props.handleDetailInputChange} value={props.count}/>
                <ProductAdd onClick={() => props.handleChangeCount(props.count+1)}>+</ProductAdd>
            </ProductAmount>
        )
    }else if(props.type === "cartAmount"){
        return(
            <ProductAmount className="cart-amount">
                <ProductSubtract onClick={() => props.handleSubtractClick(props.item)}>-</ProductSubtract>
                <ProductInput onChange={(e) => props.handleCartInputChange(e,props.item)} value={props.item.count}/>
                <ProductAdd onClick={() => props.handleAddClick(props.item)}>+</ProductAdd>
            </ProductAmount>
        )
    }
};

const mapDispatch = (dispatch) => ({
    handleDetailInputChange(e){
        let count = e.target.value;

        if(count === ''){
            dispatch(detailActionCreators.changeCount(count));
            dispatch(detailActionCreators.changeCouldSubmit(false));
        }else{
            if(isNaN(count)){
                dispatch(detailActionCreators.changeCount(1));
                dispatch(detailActionCreators.changeCouldSubmit(true));
            }else{
                dispatch(detailActionCreators.changeCount(count<1?1:count));
                dispatch(detailActionCreators.changeCouldSubmit(true));
            }
        }
    },
    handleChangeCount(count){
        dispatch(detailActionCreators.changeCount(count<1?1:count));
        dispatch(detailActionCreators.changeCouldSubmit(true));
    },
    handleSubtractClick(item){
        dispatch(cartActionCreators.changeSubtractClick(item));
    },
    handleAddClick(item){
        dispatch(cartActionCreators.changeAddClick(item));
    },
    handleCartInputChange(e,item){
        let count = e.target.value;

        if(count === '' || isNaN(count)){
            dispatch(cartActionCreators.changeInput(1,item));
        }else{
            dispatch(cartActionCreators.changeInput(count<1?1:count,item));
        }
    }
});

export default connect(null,mapDispatch)(Amount);
