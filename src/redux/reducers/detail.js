import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    productInfo: {},
    count: 1,
    couldSubmit: true
  },
  reducers: {
    changeProductInfoSuccess(state, action) {
      state.productInfo = action.payload;
    },

    changeCount(state, action) {
      state.count = action.payload;
    },

    changeCouldSubmit(state, action) {
      state.couldSubmit = action.payload;
    }
  }
});

const getProductInfo = id => {
  return dispatch => {
    axios.get(`/api/detail${id}.json`).then(res => {
      if (res.data && res.data.success) {
        dispatch(changeProductInfoSuccess(res.data.data.detailItem));
      }
    });
  };
};

const { actions, reducer } = detailSlice;

export const {
  changeProductInfoSuccess,
  changeCount,
  changeCouldSubmit
} = actions;

export {
  getProductInfo
};

export default reducer;