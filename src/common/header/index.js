import React,{Component} from 'react';
import {HeaderWrapper,Nav,Logo,CartButton} from "./style";
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
                <HeaderWrapper>
                    <Nav>
                        <Link to="/">
                            <Logo/>
                        </Link>
                        <Link to="/cart">
                            <CartButton>购物车</CartButton>
                        </Link>
                    </Nav>
                </HeaderWrapper>
            </header>
        )
    }
}

export default Header;
