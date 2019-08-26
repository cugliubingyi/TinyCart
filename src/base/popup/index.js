import React from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {PopUpMask,PopUpWrapper} from './style';
import {Link} from 'react-router-dom';

const PopUp = (props) => {
    return(
        <PopUpMask>
            <PopUpWrapper>
                <div className="popup-text">{props.text}</div>
                <div className="popup-btns">
                    <div className="remain-btn" onClick={props.handleHidePopUp}>{props.leftText}</div>
                    <Link to="/cart" className="go-btn-link">
                        <div className="go-btn" onClick={props.handleHidePopUp}>{props.rightText}</div>
                    </Link>
                </div>
            </PopUpWrapper>
        </PopUpMask>
    )
};

const mapDispatch = (dispatch) => ({
    handleHidePopUp(){
        dispatch(actionCreators.changeHidePopUp());
    }
});

export default connect(null,mapDispatch)(PopUp);
