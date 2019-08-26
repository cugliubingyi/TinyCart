import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ProductItem, ProductInfo, ProductPicWrapper} from "../style";

const ListItem = (props) => {
    const newList = props.homeList.toJS();
    return(
        <ProductItem key={newList[props.index].id}>
            <Link className="product-link" to={`detail/${newList[props.index].id}`}>
                <ProductPicWrapper>
                    <img className="product-img" src={newList[props.index].imgUrl} alt=""/>
                </ProductPicWrapper>
                <ProductInfo>
                    <p className="product-name">{newList[props.index].name}</p>
                    <p className="product-price">￥ <span className="product-red">{newList[props.index].price + '.00'}</span></p>
                </ProductInfo>
            </Link>
        </ProductItem>
    )
};

const mapState = (state) => ({
    homeList:state.getIn(['home','homeList'])
});

export default connect(mapState,null)(ListItem);
