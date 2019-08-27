import {connect} from 'react-redux';
import {actionCreators} from '../store';
import CartHeader from '../components/CartHeader';
import {getCartList} from '../selectors';

const mapState = (state) => ({
    cartList:getCartList(state)
});

const mapDispatch = (dispatch) => ({
    handleCheckAllClick(checkAll){
        dispatch(actionCreators.changeCheckAll(checkAll));
    }
});

export default connect(mapState,mapDispatch)(CartHeader);
