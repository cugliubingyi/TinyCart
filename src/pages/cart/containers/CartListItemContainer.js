import {connect} from 'react-redux';
import {actionCreators} from '../store';
import CartListItem from '../components/CartListItem';

const mapDispatch = (dispatch) => ({
    handleDeleteCartItem(item){
        dispatch(actionCreators.deleteCartItem(item));
    },
    handleSubtractClick(item){
        dispatch(actionCreators.changeSubtractClick(item));
    },
    handleAddClick(item){
        dispatch(actionCreators.changeAddClick(item));
    },
    handleInputChange(e,item){
        let count = e.target.value;

        if(count === '' || isNaN(count)){
            dispatch(actionCreators.changeInput(1,item));
        }else{
            dispatch(actionCreators.changeInput(count < 1 ? 1 : count,item));
        }
    },
    handleCheckBoxClick(item){
        dispatch(actionCreators.changeCheckBox(item));
    }
});

export default connect(null,mapDispatch)(CartListItem);
