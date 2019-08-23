import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CartFooterWrapper} from '../style';

class CartFooter extends Component{
    getFooterArea(){
        const {cartList} = this.props;
        const newList = cartList.toJS();
        if(newList.length){
            return(
                <CartFooterWrapper>
                    <div className="cart-footer-close">去结算</div>
                    <div className="cart-footer-total">￥{this.getFooterTotal(newList)}</div>
                </CartFooterWrapper>
            )
        }else{
            return null;
        }
    }

    getFooterTotal(list){
        let total = 0;
        list.forEach(item => {
            if(item.checked){
                total += item.totalPrice;
            }
        });
        return total;
    }

    render(){
        return(
            <div>
                {this.getFooterArea()}
            </div>
        )
    }
}

const mapState = (state) => ({
    cartList:state.getIn(['cart','cartList'])
});

export default connect(mapState,null)(CartFooter);
