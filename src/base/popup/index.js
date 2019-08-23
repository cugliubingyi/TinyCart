import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {PopUpMask,PopUpWrapper} from './style';
import {Link} from 'react-router-dom';

class PopUp extends Component{
    render(){
        return(
            <PopUpMask>
                <PopUpWrapper>
                    <div className="popup-text">添加购物车成功</div>
                    <div className="popup-btns">
                        <div className="remain-btn" onClick={this.props.handleHidePopUp}>继续逛逛</div>
                        <Link to="/cart" className="go-btn-link">
                            <div className="go-btn" onClick={this.props.handleHidePopUp}>去购物车结算</div>
                        </Link>
                    </div>
                </PopUpWrapper>
            </PopUpMask>
        )
    }
}

const mapDispatch = (dispatch) => ({
    handleHidePopUp(){
        dispatch(actionCreators.changeHidePopUp());
    }
});

export default connect(null,mapDispatch)(PopUp);
