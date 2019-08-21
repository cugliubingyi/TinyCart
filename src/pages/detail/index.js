import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Detail extends Component{
    componentDidMount(){
        this.props.handleChangeDetail(this.props.match.params.id);
    }

    render(){
        return(
            <div>{this.props.productInfo.toJS().name}</div>
        )
    }
}

const mapState = (state) => ({
    productInfo:state.getIn(['detail','productInfo'])
});

const mapDispatch = (dispatch) => ({
    handleChangeDetail(id){
        dispatch(actionCreators.getProductInfo(id));
    }
});

export default connect(mapState,mapDispatch)(Detail);
