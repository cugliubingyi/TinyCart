import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getProductList } from "redux/reducers/products";
import ProductList from "components/home/ProductList";
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
          <ProductList />
          <Pagination />
        </HomeWrapper>
      </SiteLayout>
    );
  }
}

const mapDispatch = dispatch => ({
  changeHomeInfo() {
    dispatch(getProductList());
  }
});

export default connect(null, mapDispatch)(Home);
