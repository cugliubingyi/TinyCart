import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ProductList,ProductItem,ProductPicWrapper,ProductInfo} from '../style';

class List extends Component{
    getProductArea(){
        const {homeList,page} = this.props;
        let newList = homeList.toJS();
        let pageList = [];
        if(newList.length){
            for(let i = (page - 1)*4;i < page*4;i++){
                if(i < newList.length){
                    pageList.push(
                        <ProductItem key={newList[i].id}>
                            <Link className="product-link" to={`detail/${newList[i].id}`}>
                                <ProductPicWrapper>
                                    <img className="product-img" src={newList[i].imgUrl} alt=""/>
                                </ProductPicWrapper>
                                <ProductInfo>
                                    <p className="product-name">{newList[i].name}</p>
                                    <p className="product-price">￥ <span className="product-red">{newList[i].price + '.00'}</span></p>
                                </ProductInfo>
                            </Link>
                        </ProductItem>
                    )
                }else{
                    break;
                }
            }
        }
        return pageList;
    }

    render(){
        return(
            <div>
                <ProductList>
                    {this.getProductArea()}
                </ProductList>
            </div>
        )
    }
}

const mapState = (state) => ({
    homeList:state.getIn(['home','homeList']),
    page:state.getIn(['home','page']),
    totalPage:state.getIn(['home','totalPage'])
});

export default connect(mapState,null)(List);
