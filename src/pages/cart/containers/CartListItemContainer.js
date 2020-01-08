import { connect } from "react-redux";
import {
  deleteCartItem,
  changeSubtractClick,
  changeAddClick,
  changeInput,
  changeCheckBox
} from "redux/reducers/cart";
import CartListItem from "../components/CartListItem";

const mapDispatch = dispatch => ({
  handleDeleteCartItem(item) {
    dispatch(deleteCartItem(item));
  },
  handleSubtractClick(item) {
    dispatch(changeSubtractClick(item));
  },
  handleAddClick(item) {
    dispatch(changeAddClick(item));
  },
  handleInputChange(e, item) {
    let count = e.target.value;

    if (count === "" || isNaN(count)) {
      dispatch(changeInput(1, item));
    } else {
      dispatch(changeInput(count < 1 ? 1 : count, item));
    }
  },
  handleCheckBoxClick(item) {
    dispatch(changeCheckBox(item));
  }
});

export default connect(null, mapDispatch)(CartListItem);
