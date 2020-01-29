import React from "react";
import { connect } from "react-redux";
import {
  changeCount,
  changeCouldSubmit
} from "redux/reducers/detail";
import {
  changeInput,
  changeSubtractClick,
  changeAddClick
} from "redux/reducers/cart";
import {
  ProductAmount,
  ProductSubtract,
  ProductInput,
  ProductAdd
} from "./style";

const Amount = props => {
  if (props.type === "detailAmount") {
    return (
      <ProductAmount className="detail-amount">
        <ProductSubtract
          onClick={() =>
            props.handleChangeCount((parseInt(props.count) || 0) - 1)
          }
        >
          -
        </ProductSubtract>
        <ProductInput
          onChange={props.handleDetailInputChange}
          value={props.count}
        />
        <ProductAdd
          onClick={() =>
            props.handleChangeCount((parseInt(props.count) || 0) + 1)
          }
        >
          +
        </ProductAdd>
      </ProductAmount>
    );
  } else if (props.type === "cartAmount") {
    return (
      <ProductAmount className="cart-amount">
        <ProductSubtract onClick={() => props.handleSubtractClick(props.item)}>
          -
        </ProductSubtract>
        <ProductInput
          onChange={e => {
            props.handleCartInputChange(e, props.item)
          }}
          value={props.item.count}
        />
        <ProductAdd onClick={() => props.handleAddClick(props.item)}>
          +
        </ProductAdd>
      </ProductAmount>
    );
  }
};

const mapDispatch = dispatch => ({
  handleDetailInputChange(e) {
    let count = e.target.value;

    if (count === "") {
      dispatch(changeCount(count));
      dispatch(changeCouldSubmit(false));
    } else {
      count = parseInt(count);
      if (isNaN(count)) {
        dispatch(changeCount(1));
        dispatch(changeCouldSubmit(true));
      } else {
        dispatch(changeCount(count < 1 ? 1 : count));
        dispatch(changeCouldSubmit(true));
      }
    }
  },
  handleChangeCount(count) {
    dispatch(changeCount(count < 1 ? 1 : count));
    dispatch(changeCouldSubmit(true));
  },
  handleSubtractClick(item) {
    dispatch(changeSubtractClick(item));
  },
  handleAddClick(item) {
    dispatch(changeAddClick(item));
  },
  handleCartInputChange(e, item) {
    let count = e.target.value;

    if (count === "") {
      dispatch(changeInput(1, item));
    } else {
      count = parseInt(count);
      dispatch(changeInput(count < 1 ? 1 : count, item));
    }
  }
});

export default connect(null, mapDispatch)(Amount);
