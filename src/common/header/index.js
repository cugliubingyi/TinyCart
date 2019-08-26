import React from 'react';
import {HeaderWrapper,Nav,Logo,CartButton} from "./style";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <HeaderWrapper>
                <Nav>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <Link to="/cart">
                        <CartButton><i className="iconfont icongouwuche"></i>购物车<span className="cart-item-num">{props.cartList.toJS().length}</span></CartButton>
                    </Link>
                </Nav>
            </HeaderWrapper>
        </header>
    )
};

const mapState = (state) => ({
    cartList:state.getIn(['cart','cartList'])
});

export default connect(mapState,null)(Header);
