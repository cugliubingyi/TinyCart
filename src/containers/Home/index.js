import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getHomeList } from "redux/reducers/home";
import List from "components/home/List";
import Pagination from "components/home/Pagination";
import SiteLayout from "layout/SiteLayout";
import { HomeWrapper } from "./style";

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeInfo();
  }

  render() {
    return (
      <SiteLayout>
        <HomeWrapper>
          <List />
          <Pagination />
        </HomeWrapper>
      </SiteLayout>
    );
  }
}

const mapDispatch = dispatch => ({
  changeHomeInfo() {
    dispatch(getHomeList());
  }
});

export default connect(null, mapDispatch)(Home);
