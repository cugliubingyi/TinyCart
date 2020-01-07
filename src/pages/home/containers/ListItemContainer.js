import { connect } from "react-redux";
import ListItem from "../components/ListItem";

const mapState = state => ({
  homeList: state.getIn(["home", "homeList"])
});

export default connect(mapState, null)(ListItem);
