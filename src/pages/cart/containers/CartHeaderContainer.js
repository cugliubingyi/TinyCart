import {connect} from 'react-redux';
import {actionCreators} from '../store';
import CartHeader from '../components/CartHeader';

const mapState = (state) => ({
    cartList:state.getIn(['cart','cartList']),
    checkAll:state.getIn(['cart','checkAll'])
});

const mapDispatch = (dispatch) => ({
    handleCheckAllClick(checkAll){
        dispatch(actionCreators.changeCheckAll(checkAll));
    }
});

export default connect(mapState,mapDispatch)(CartHeader);
