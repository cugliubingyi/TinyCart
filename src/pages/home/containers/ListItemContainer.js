import { connect } from "react-redux";
import ListItem from "../components/ListItem";

const mapState = state => ({
  homeList: state.home.homeList
});

export default connect(mapState, null)(ListItem);
