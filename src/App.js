import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Globalstyle } from "./style";
import { Iconfontstyle } from "./statics/iconfont/iconfont";

import Header from "common/header";
import Home from "containers/Home";
import Cart from "containers/Cart";
import Detail from "containers/Detail";
import store from "redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Globalstyle />
            <Iconfontstyle />
            <Header />
            <Route path="/" component={Home} exact></Route>
            <Route path="/cart" component={Cart} exact></Route>
            <Route path="/detail/:id" component={Detail} exact></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
