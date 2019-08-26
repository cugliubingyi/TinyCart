import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import List from './components/List';
import Pagination from './components/Pagination';
import {HomeWrapper} from './style';

class Home extends PureComponent{
    componentDidMount(){
        this.props.changeHomeInfo();
    }

    render(){
        return(
            <div>
                <HomeWrapper>
                    <List/>
                    <Pagination/>
                </HomeWrapper>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
   changeHomeInfo(){
       dispatch(actionCreators.getHomeList());
   }
});

export default connect(null,mapDispatch)(Home);
