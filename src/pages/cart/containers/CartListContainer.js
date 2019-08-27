import React from 'react';
import {connect} from 'react-redux';
import CartListItemContainer from "./CartListItemContainer";
import CartList from '../components/CartList';

const getCartArea = (cartList) => {
    return cartList.toJS().map((item) => (
        <CartListItemContainer item={item}/>
    ));
};

const mapState = (state) => ({
    cartList:state.getIn(['cart','cartList']),
    cartArea:getCartArea(state.getIn(['cart','cartList']))
});

export default connect(mapState,null)(CartList);
