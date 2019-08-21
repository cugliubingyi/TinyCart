import React,{Component} from 'react';
import {Globalstyle} from './style';
import {Iconfontstyle} from "./statics/iconfont/iconfont";
import {BrowserRouter,Route} from "react-router-dom";
import {Provider} from 'react-redux';
import Home from './pages/home';
import Cart from './pages/cart';
import Detail from './pages/detail';
import store from './store';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Globalstyle/>
                        <Iconfontstyle/>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/cart" component={Cart} exact></Route>
                        <Route path="/detail/:id" component={Detail} exact></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
