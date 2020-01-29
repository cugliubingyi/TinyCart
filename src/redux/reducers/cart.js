import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: []
  },
  reducers: {
    addCartItemSuccess(state, action) {
      if (state.cartList.some(item => item.desc === action.payload.desc)) {
        state.cartList.forEach(item => {
          if (item.desc === action.payload.desc) {
            item.count += action.payload.count;
            item.totalPrice += action.payload.count * action.payload.price;
          }
        });
      } else {
        state.cartList.push(action.payload);
      }
    },

    deleteCartItemSuccess(state, action) {
      if (state.cartList.some(item => item.desc === action.payload.desc)) {
        state.cartList = state.cartList.filter(
          item => item.desc !== action.payload.desc
        );
      }
    },

    changeSubtractClickSuccess(state, action) {
      state.cartList.forEach(item => {
        if (item.desc === action.payload.desc) {
          item.count = item.count === 1 ? 1 : item.count - 1;
          item.totalPrice = item.count * item.price;
        }
      });
    },

    changeAddClickSuccess(state, action) {
      state.cartList.forEach(item => {
        if (item.desc === action.payload.desc) {
          item.count++;
          item.totalPrice = item.count * item.price;
        }
      });
    },

    changeInputSuccess(state, action) {
      state.cartList.forEach(item => {
        if (item.desc === action.payload.item.desc) {
          item.count = action.payload.count;
          item.totalPrice = item.count * item.price;
        }
      });
    },

    changeCheckBoxSuccess(state, action) {
      state.cartList.forEach(item => {
        if (item.desc === action.payload.desc) {
          item.checked = !action.payload.checked;
        }
      });
    },

    changeCheckAllSuccess(state, action) {
      state.cartList.forEach(item => {
        item.checked = !action.payload;
      });
    }
  }
});

const addCartItem = item => {
  return dispatch => {
    dispatch(addCartItemSuccess(item));
  };
};

const deleteCartItem = item => {
  return dispatch => {
    dispatch(deleteCartItemSuccess(item));
  };
};

const changeSubtractClick = item => {
  return dispatch => {
    dispatch(changeSubtractClickSuccess(item));
  };
};

const changeAddClick = item => {
  return dispatch => {
    dispatch(changeAddClickSuccess(item));
  };
};

const changeInput = (count, item) => {
  return dispatch => {
    dispatch(changeInputSuccess({ count, item }));
  };
};

const changeCheckAll = checkAll => {
  return dispatch => {
    dispatch(changeCheckAllSuccess(checkAll));
  };
};

const changeCheckBox = item => {
  return dispatch => {
    dispatch(changeCheckBoxSuccess(item));
  };
};

const { actions, reducer } = cartSlice;

export const {
  addCartItemSuccess,
  deleteCartItemSuccess,
  changeSubtractClickSuccess,
  changeAddClickSuccess,
  changeInputSuccess,
  changeCheckBoxSuccess,
  changeCheckAllSuccess
} = actions;

export {
  addCartItem,
  deleteCartItem,
  changeSubtractClick,
  changeAddClick,
  changeInput,
  changeCheckBox,
  changeCheckAll
};

export default reducer;
