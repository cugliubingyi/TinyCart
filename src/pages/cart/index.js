import React from 'react';
import CartHeader from './components/CartHeader';
import CartList from './components/CartList';
import CartFooter from './components/CartFooter';
import {CartWrapper} from './style';

const Cart = () => {
    return(
        <div>
            <CartWrapper>
                <CartHeader/>
                <CartList/>
                <CartFooter/>
            </CartWrapper>
        </div>
    )
};

export default Cart;
