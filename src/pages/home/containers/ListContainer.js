import { connect } from "react-redux";
import List from "../components/List";
import { getHomeList, getPage, getProductArea } from "../selectors";

const mapState = state => ({
  homeList: getHomeList(state),
  page: getPage(state),
  pageList: getProductArea(state)
});

export default connect(mapState, null)(List);
