import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {ProductList} from '../style';
import ListItem from "./ListItem";

class List extends PureComponent{
    getProductArea(){
        const {homeList,page} = this.props;
        let newList = homeList.toJS();
        let pageList = [];
        if(newList.length){
            for(let i = (page - 1)*4;i < page*4;i++){
                if(i < newList.length){
                    pageList.push(
                        <ListItem index={i}/>
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
    page:state.getIn(['home','page'])
});

export default connect(mapState,null)(List);
