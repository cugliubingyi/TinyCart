import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {CartListWrapper} from '../style';
import CartListItem from "./CartListItem";

class CartList extends PureComponent{
    getCartArea(){
        return this.props.cartList.toJS().map((item) => (
            <CartListItem item={item}/>
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
            dispatch(actionCreators.changeInput(count < 1 ? 1  : count,item));
        }
    },
    handleCheckBoxClick(item){
        dispatch(actionCreators.changeCheckBox(item));
    }
});

export default connect(mapState,mapDispatch)(CartList);
