import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: []
  },
  reducers: {
    addCartItem(state, action) {
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

    deleteCartItem(state, action) {
      if (state.cartList.some(item => item.desc === action.payload.desc)) {
        state.cartList = state.cartList.filter(
          item => item.desc !== action.payload.desc
        );
      }
    },

    changeSubtractClick(state, action) {
      state.cartList.forEach(item => {
        if (item.desc === action.payload.desc) {
          item.count = item.count === 1 ? 1 : item.count - 1;
          item.totalPrice = item.count * item.price;
        }
      });
    },

    changeAddClick(state, action) {
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

    changeCheckBox(state, action) {
      state.cartList.forEach(item => {
        if (item.desc === action.payload.desc) {
          item.checked = !action.payload.checked;
        }
      });
    },

    changeCheckAll(state, action) {
      state.cartList.forEach(item => {
        item.checked = !action.payload;
      });
    }
  }
});

const changeInput = (count, item) => {
  return dispatch => {
    dispatch(changeInputSuccess({ count, item }));
  };
};

const { actions, reducer } = cartSlice;

export const {
  addCartItem,
  deleteCartItem,
  changeSubtractClick,
  changeAddClick,
  changeInputSuccess,
  changeCheckBox,
  changeCheckAll
} = actions;

export {
  changeInput
};

export default reducer;
