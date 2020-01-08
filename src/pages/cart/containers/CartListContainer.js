import { connect } from "react-redux";
import CartList from "../components/CartList";
import { getCartList, getCartArea } from "redux/selectors/cartSelectors";

const mapState = state => ({
  cartList: getCartList(state),
  cartArea: getCartArea(state)
});

export default connect(mapState, null)(CartList);
