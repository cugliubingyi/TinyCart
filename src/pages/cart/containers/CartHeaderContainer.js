import { connect } from "react-redux";
import { changeCheckAll } from "redux/reducers/cart";
import CartHeader from "../components/CartHeader";
import { getCartList } from "redux/selectors/cartSelectors";

const mapState = state => ({
  cartList: getCartList(state)
});

const mapDispatch = dispatch => ({
  handleCheckAllClick(checkAll) {
    dispatch(changeCheckAll(checkAll));
  }
});

export default connect(mapState, mapDispatch)(CartHeader);
