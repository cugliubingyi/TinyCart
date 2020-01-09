import { connect } from "react-redux";
import List from "../components/List";
import { getHomeList, getPage, getProductArea } from "redux/selectors/homeSelectors";

const mapState = state => ({
  homeList: getHomeList(state),
  page: getPage(state),
  pageList: getProductArea(state)
});

export default connect(mapState, null)(List);
